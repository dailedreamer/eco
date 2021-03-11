export default {
    state: {
      showEcoParts          : true,
      showPartsManufacturing: false,
    
    },
    mutations: {
      setEcoPartsVisibility(state) {
        state.showEcoParts              = true;
        state.showPartsManufacturing    = false;
      },
      setPartsManufacturingVisibility(state) {
        state.showPartsManufacturing    = true;
        state.showEcoParts              = false;
      }
    },
    actions: {
      async setEcoPartsVisibility(state) {
        state.commit("setEcoPartsVisibility");
      },
      async setPartsManufacturingVisibility(state) {
        state.commit("setPartsManufacturingVisibility");
      }
    },
    getters: {
      getShowEcoPartsStatus             : state     => state.showEcoParts,
      getShowPartsManufacturingStatus   : state     => state.showPartsManufacturing,
    
    }
  };
  