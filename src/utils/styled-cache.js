import createCache from "@emotion/cache";
import extraScopePlugin from "stylis-plugin-extra-scope";
import { prefixer } from "stylis";

export const StyledCache = (key, scope) => {
  return createCache({
    key: key || "fourohtwo",
    stylisPlugins: [
      prefixer, // default, required
      extraScopePlugin(scope || ".fourohtwo-widget"), // add a custom scope to make get a higher specificity than the reset CSS
    ],
  });
};
