/// <reference types="vitest/config" />

import { getViteConfig } from "astro/config";
import { defineConfig } from "vitest/config";

export default getViteConfig({
  test: {},
});

// export default defineConfig({
//   test: {},
// });
