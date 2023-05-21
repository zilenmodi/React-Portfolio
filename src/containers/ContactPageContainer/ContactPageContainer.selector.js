import { get } from "lodash";

export const selectContactPageLabels = (state) => {
  return get(state, "globals.labels.contactpageLabels", {});
};
