import { readdir, writeFile, copyFile } from "node:fs/promises";
import { join } from "node:path";

const publicDir = ".output/public";
const assetsDir = join(publicDir, "assets");
const files = await readdir(assetsDir);
const entryScript = files.find((file) => /^index-.*\.js$/.test(file));
const stylesheet = files.find((file) => /^styles-.*\.css$/.test(file));

if (!entryScript) {
  throw new Error("Could not find the built GitHub Pages entry script in .output/public/assets");
}

if (!stylesheet) {
  throw new Error("Could not find the built stylesheet in .output/public/assets");
}

const basePath = process.env.GITHUB_PAGES_BASE_PATH || "/";
const normalizedBasePath = basePath.endsWith("/") ? basePath : `${basePath}/`;
const assetBasePath = normalizedBasePath === "/" ? "/" : normalizedBasePath;

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Divyank K Pawar — Mechanical Engineer Portfolio</title>
    <meta
      name="description"
      content="Portfolio of Divyank K Pawar, mechanical engineer with experience at BPCL Inspection Department and industrial conveyor design."
    />
    <meta name="author" content="Divyank K Pawar" />
    <meta property="og:title" content="Divyank K Pawar — Mechanical Engineer" />
    <meta
      property="og:description"
      content="Mechanical engineer specializing in inspection, CAD design, and industrial systems."
    />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="${assetBasePath}favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
    />
    <link rel="stylesheet" href="${assetBasePath}assets/${stylesheet}" />
    <script type="module" src="${assetBasePath}assets/${entryScript}"></script>
  </head>
  <body></body>
</html>
`;

await writeFile(join(publicDir, "index.html"), html);
await copyFile(join(publicDir, "index.html"), join(publicDir, "404.html"));
