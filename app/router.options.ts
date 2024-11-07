import type { RouterConfig } from "nuxt/schema";
export default {
  scrollBehavior: () => {
    return {
      top: 50,
      left: 0,
    };
  },
} satisfies RouterConfig;
