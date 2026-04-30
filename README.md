# Temporary Allmaps Leaflet Maps

A shared repository for hosting Allmaps Leaflet web maps on GitHub Pages. Each map lives as a standalone HTML file in the root of this repo.

## Prerequisites

- [Node.js](https://nodejs.org) (v18 or later) — install via `brew install node` on a Mac
- [Git](https://git-scm.com)
- A GitHub account with access to this repository

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/davidrumseymapcenter/temp-allmaps-leaflet.git
cd temp-allmaps-leaflet
```

### 2. Install dependencies

```bash
npm install
```

This installs Leaflet, the Allmaps plugin, Vite, and the gh-pages deploy tool.

### 3. Preview locally

```bash
npx vite
```

Open the URL printed in your terminal (usually `http://localhost:5173`) to browse existing maps. To view a specific file, navigate to it directly, e.g. `http://localhost:5173/my-map.html`.

Press `Ctrl+C` to stop the server.

## Adding a new map

### 1. Create your HTML file

Add a new `.html` file to the root of the repository. Name it something descriptive, e.g. `scroll-map-1851-sf.html`.

A minimal starting template is below, or copy an existing .html file to customize.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="node_modules/leaflet/dist/leaflet.css" />
    <style>
      #map {
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script type="module">
      import L from "leaflet";
      import { WarpedMapLayer } from "@allmaps/leaflet";

      const map = L.map("map").setView([LAT, LNG], ZOOM);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );

      const annotationUrl = "YOUR_IIIF_ANNOTATION_URL";
      const warpedMapLayer = new WarpedMapLayer(annotationUrl, {
        pane: "warpedMapPane",
      }).addTo(map);

      map.createPane("warpedMapPane");
      map.getPane("warpedMapPane").style.zIndex = 400;
    </script>
  </body>
</html>
```

Replace `LAT`, `LNG`, `ZOOM`, and `YOUR_IIIF_ANNOTATION_URL` with your map's values. Your Allmaps annotation URL can be found at [allmaps.org](https://allmaps.org).

### 2. Preview your map

With the Vite server running, open `http://localhost:5173/your-file-name.html` in your browser to check it.

### 3. Commit and push

```bash
git add your-file-name.html
git commit -m "add your-file-name map"
git push
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and publishes it to the `gh-pages` branch. Your map will be live at:

```
https://davidrumseymapcenter.github.io/temp-allmaps-leaflet/your-file-name.html
```

It may take a minute or two for GitHub Pages to update.
