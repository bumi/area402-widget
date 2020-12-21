import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import extraScopePlugin from "stylis-plugin-extra-scope";

import { DEFAULT_BASE_CLASSNAME } from "./constants";

export const StyledCache = (key, scope) => {
  return createCache({
    key: key || "fourohtwo",
    stylisPlugins: [
      prefixer, // default, required
      extraScopePlugin(scope || `.${DEFAULT_BASE_CLASSNAME}`), // add a custom scope to make get a higher specificity than the reset CSS
    ],
  });
};
