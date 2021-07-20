// Note: I did this module and the other one with generic types to save time
/* eslint-disable */

import data from "@/assets/data.json";

export default {
  state: () => ({
    roles: [],
    role_status: "idle",
  }),
  mutations: {
    setVal(state: any, payload: any) {
      const { key, value } = payload;
      state[key] = value;
    },
  },
  actions: {
    async loadRoles({ commit }: { commit: any }) {
      let newData: any = [];
      let newStatus = "idle";
      try {
        newStatus = "loading";
        await new Promise((res: any) => {
          setTimeout(() => {
            newData = [...data];
            res();
          }, 2500);
        });
        newStatus = "success";
      } catch (err) {
        newStatus = "error";
        console.error(err, "error loading the roles");
      }
      commit("setVal", {
        key: "role_status",
        value: newStatus,
      });
      commit("setVal", {
        key: "roles",
        value: newData,
      });
    },
  },
};
