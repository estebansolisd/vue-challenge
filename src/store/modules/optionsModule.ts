// Note: I did this module and the other one with generic types to save time
/* eslint-disable */
export default {
  state: () => ({
    options: [],
  }),
  mutations: {
    setValOptions(state: any, payload: any) {
      const { key, value } = payload;
      state[key] = value;
    },
  },
  actions: {
    //   eslint-disable-next-line
    loadOptions({ commit }: { commit: any }) {
      commit("setValOptions", {
        key: "options",
        value: [
          {
            option: "Active",
            value: 1,
          },
          {
            option: "Inactive",
            value: 2,
          },
          {
            option: "Active and Inactive",
            value: 3,
          },
        ],
      });
    },
  },
};
