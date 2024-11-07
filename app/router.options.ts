import type { RouterConfig } from "nuxt/schema";
export default {
  scrollBehavior: () => {
    console.log("scroll");
    function test() {
      console.log("test");
    }
    test();
    const element = document.createElement("span");
    element.innerHTML = "test";
    document.body.append(element);

    alert("alert");

    return {
      top: 50,
      left: 0,
    };
  },
} satisfies RouterConfig;
