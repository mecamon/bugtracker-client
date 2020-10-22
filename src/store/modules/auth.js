import axiosInstance from '../../api/api-info';

export default {
  namespaced: true,
  state: () => ({
    error: {
      message: null,
      isShowing: false,
    },
  }),
  getters: {
    getError: state => state.error
  },
  mutations: {
    showError: (state, message) => {
      state.error.message = message,
      state.error.isShowing = true
    }
  },
  actions: {
    login: async (context, payload) =>
      axiosInstance.post('auth/login', payload).catch(function(error) {
        if (error.response) {
          context.commit('showError', error.response.data.errorMessage)
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      }),
  },
  modules: {},
};
