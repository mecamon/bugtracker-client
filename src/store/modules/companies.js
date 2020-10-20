import axiosInstance from '../../api/api-info';

export default {
    namespaced: true,
    state: () => ({
        showModal: false,
        companies: [],
        companyPages: [],
        selectedCompany: null,
        page: 1,
        state: null,
        date: -1
    }),
    getters: {
        getStateFilter: state => state.state,
        getDateFilter: state => state.date,
        getCurrentPage: state => state.page,
        getModalState: state => state.showModal,
        getCompanies: state => state.companies,
        getCompanyPages: state => state.companyPages,
        getSelectedCompany: state => state.selectedCompany
    },
    mutations: {
        addDateFilter: (state, payload) => state.date = payload,
        addStateFilter: (state, payload) => state.state = payload,
        changePage: (state, payload) => state.page = payload,
        selectCompany: (state, payload) => state.selectedCompany = payload,
        switchModalVisibility: (state, payload) => state.showModal = payload,
        assingCompaniesData: (state, payload) =>  state.companies = payload,
        assingCompanyPages: (state, payload) =>  {
            const newCompanyPages = []

            for (let i = 1; i <= payload; i++) {
                newCompanyPages.push(i)
            }
            state.companyPages = newCompanyPages
        }
    },
    actions: {
        fetchCompanies: async (context) => {
           let url = `companies?page=${context.getters['getCurrentPage']}
                &date=${context.getters['getDateFilter']}`

            if (context.getters['getStateFilter']) {
                if (!/state=/.test(url)) {
                    url = `${url}&state=${context.getters['getStateFilter']}`
                }
            }

           const response = await axiosInstance.get(url ,
            { headers: {'Authorization': localStorage.getItem('token')} })

           context.commit('assingCompaniesData', response.data.companies)
           context.commit('assingCompanyPages', response.data.totalOfPages)
        },
    },
    modules: {}
}
