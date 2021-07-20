// Note: I did this module and the other one with generic types to save time
/* eslint-disable */

import data from "@/assets/data.json";

export default {
  state: () => ({
    roles: [],
    role_status: "idle",
  }),
  mutations: {
    setValRoles(state: any, payload: any) {
      const { key, value } = payload;
      state[key] = value;
    },
  },
  actions: {
    setValRoles({ commit }: { commit: any }, payload: any) {
      commit("setValRoles", {
        key: "roles",
        value: payload,
      });
    },
    deleteRole({ commit, state }: { commit: any; state: any }, id: number) {
        console.log(id, "id");
        
      commit("setValRoles", {
        key: "roles",
        value: state.roles.filter((r: any) => r.id !== id),
      });
    },
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
      commit("setValRoles", {
        key: "role_status",
        value: newStatus,
      });
      commit("setValRoles", {
        key: "roles",
        value: newData,
      });
    },
  },
};
