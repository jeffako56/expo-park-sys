export default {
  namespace: "vehicle",
  state: {
    vehicle: [],

    refreshing: false,
    isBusy: false,
  },
  reducers: {
    updateState(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    async list({ refresh, ...payload } = {}) {
      try {
        console.log("working?");
        this.updateState({
          refreshing: refresh,
          isBusy: true,
        });

        const result = [
          { key: 1, type: "small", rate: 20 },
          { key: 2, type: "medium", rate: 60 },
          { key: 3, type: "large", rate: 100 },
        ];

        // console.log(result)

        this.updateState({
          vehicle: result,
          isBusy: false,
          refreshing: false,
          isInitialized: true,
        });
      } catch (err) {
        this.updateState({
          errorMessage: err.message,
          isBusy: false,
          refreshing: false,
        });
      }
    },
  }),
};
