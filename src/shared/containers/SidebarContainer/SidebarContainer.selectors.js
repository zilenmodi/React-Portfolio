import { get } from "lodash";

export const selectSidebarLabels = (state) => {
  return get(state, "globals.labels.sidebarLabels", {});
};
