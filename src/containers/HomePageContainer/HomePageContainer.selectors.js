import { get } from "lodash";

export const selectHomePageLabels = (state) => {
  return get(state, "globals.labels.homepageLabels", {});
};
