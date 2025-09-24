import {type UserConfig} from "tsdown";

export default {
  entry: "index.ts",
  platform: "node",
  target: "node22",
  sourcemap: false,
} satisfies UserConfig;
