import Module from "./output";
import { readBinary } from "../EpanetBinary";
import { toGeoJson } from "../EpanetToGeojson";

import ModelFeatureCollection from "../../interfaces/ModelFeatureCollection";

// convert inp to geojson
// run epanet
// merge results into geojson
// give back geojson

export function runEpanet(fromProject: string): ModelFeatureCollection {
  return toGeoJson(fromProject);

  //  const epaNetEngine = Module();
  //  //@ts-ignore
  //  epaNetEngine.onRuntimeInitialized = _ => {
  //    const FS = epaNetEngine.fs;
  //    FS.writeFile("/net1.inp", fromProject);
  //    const t0 = performance.now();
  //    console.log(epaNetEngine._epanet_run());
  //    const t1 = performance.now();
  //    console.log("Call to _epanet_run took " + (t1 - t0) + " milliseconds.");
  //
  //    const resultView = FS.readFile("/net1.bin");
  //
  //    const t2 = performance.now();
  //    console.log(readBinary(resultView));
  //    const t3 = performance.now();
  //    console.log("Call to readBinary took " + (t3 - t2) + " milliseconds.");
  //  };
  //
}
