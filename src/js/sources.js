import { API_ROOT } from "./api";

const data_sources = {
  "taz-tiles": {
    type: "vector",
    url: "https://www.tiles.dvrpc.org/data/taz-2010.json",
    minzoom: 8,
  },
  "destination-geojson": {
    type: "geojson",
    data: API_ROOT + "/flows/?q=-1",
  },
  //   "indego-query": {
  //     type: "geojson",
  //     data: urlRoot + "indego/trip-points/?q=3004",
  //   },
  "rr-lines-src": {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/48b0b600abaa4ca1a1bacf917a31c29a_0.geojson",
  },
  "rr-stops-src": {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/64eaa4539cf4429095c2c7bf25c629a2_0.geojson",
  },
};

export { data_sources };