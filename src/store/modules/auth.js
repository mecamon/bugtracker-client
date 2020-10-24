import axiosInstance from '../../api/api-info';

export default {
  namespaced: true,
  state: () => ({
    error: {
      message: null,
      isShowing: false,
    },
    createSupervisorModal: false,
    modalSupervisorCreated: false,
    registerSupervisorError: {
      firstname: null,
      lastname: null,
      username: null,
      password: null,
      email: null,
      gender: null,
      birth: null,
      idCompany: null,
      required: null,
    },
  }),
  getters: {
    getError: (state) => state.error,
    getModalCreateSupervisor: (state) => state.createSupervisorModal,
    getRegisterSupervisorError: (state) => state.registerSupervisorError,
    getModalSupervisorCreated: (state) => state.modalSupervisorCreated,
  },
  mutations: {
    switchModalSupervisorCreated: (state, payload) =>
      (state.modalSupervisorCreated = payload),
    showError: (state, message) => {
      (state.error.message = message), (state.error.isShowing = true);
    },
    switchModalCreateSuperVisibility: (state, payload) =>
      (state.createSupervisorModal = payload),
    resetErrorState: (state) => {
      for (const key in state.registerSupervisorError) {
        state.registerSupervisorError[key] = null;
      }
    },
    assignError: (state, arrayPayload) => {
      const key = arrayPayload[0];
      const message = arrayPayload[1];

      state.registerSupervisorError[key] = message;

      // console.log(state.registerSupervisorError[key]);
    },
  },
  actions: {
    login: async (context, payload) =>
      axiosInstance.post('auth/login', payload).catch(function(error) {
        if (error.response) {
          context.commit('showError', error.response.data.errorMessage);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      }),

    postSupervisor: async (context, payload) =>
      await axiosInstance
        .post('auth/register-supervisor', payload, {
          headers: { Authorization: localStorage.getItem('token') },
        })
        .then(function() {
          context.commit('switchModalSupervisorCreated', true);

          setTimeout(() => {
            context.commit('switchModalSupervisorCreated', false);
            context.commit('switchModalCreateSuperVisibility', false);
          }, 2500);
        })
        .catch(function(error) {
          if (error.response) {
            const errorData = [];

            if (/required/.test(error.response.data.errorMessage))
              errorData[0] = 'required';
            else if (/username/.test(error.response.data.errorMessage))
              errorData[0] = 'username';
            else if (/email/.test(error.response.data.errorMessage))
              errorData[0] = 'email';
            else if (/Company/.test(error.response.data.errorMessage))
              errorData[0] = 'idCompany';

            if (errorData[0] == 'idCompany') {
              errorData[1] = 'Company ID inserted doesn\'t exist';
            } else {
              errorData[1] = error.response.data.errorMessage;
            }
            
            context.commit('assignError', errorData);
          }
        }),
  },
  modules: {},
};
