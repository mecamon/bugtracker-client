import axiosInstance from '../../api/api-info';

export default {
  namespaced: true,
  state: () => ({
    reports: '',
    currentPage: null,
    reportsPages: []
  }),
  getters: {
    getReports: state => state.reports
  },
  mutations: {
    fillReports: (state, payload) => state.reports = payload
  },
  actions: {
    getPendingReports: context => {
      axiosInstance.get('user/pending', {
        headers: {'Authorization': localStorage.getItem('token')}
      })
      .then(response => {
        context.commit('fillReports', response.data)
      })
      .catch(error => {
        if (error.response) console.log(error.response)
      })
    }
  },
  modules: {},
};
