import { get } from "lodash";

export const selectAboutPageLabels = (state) => {
  return get(state, "globals.labels.aboutpageLabels", {});
};
