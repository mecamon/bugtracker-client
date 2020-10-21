import axiosInstance from '../../api/api-info';

export default {
    namespaced: true,
    state: () => ({
        showCreateModal: false,
        showEditModal: false,
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
        getCreateModalState: state => state.showCreateModal,
        getEditModalState: state => state.showEditModal,
        getCompanies: state => state.companies,
        getCompanyPages: state => state.companyPages,
        getSelectedCompany: state => state.selectedCompany
    },
    mutations: {
        addDateFilter: (state, payload) => state.date = payload,
        addStateFilter: (state, payload) => state.state = payload,
        changePage: (state, payload) => state.page = payload,
        selectCompany: (state, payload) => state.selectedCompany = payload,
        switchCreateModalVisibility: (state, payload) => state.showCreateModal = payload,
        switchEditModalVisibility: (state, payload) => state.showEditModal = payload,
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
        printSomething: context => console.log('Action from action'),
        fetchCompanies: async context => {
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
        fetchOneCompany: async (context, id) => {

            let url = `companies/${id}`

            const response = await axiosInstance.get(url ,
                { headers: {'Authorization': localStorage.getItem('token')} })

            context.commit('selectCompany', response.data)
        },
        editOneCompany: async (context, payload) => {

            const { _id } = context.getters.getSelectedCompany 

            let url = `companies/${_id}`

            await axiosInstance.put(url, payload,
                { headers: {'Authorization': localStorage.getItem('token')} })
            
            const response = await axiosInstance.get(url,
                { headers: {'Authorization': localStorage.getItem('token')} })
            
            context.commit('selectCompany', response.data)  
            context.dispatch('fetchCompanies') 
            
        },
        deacivateOneCompany: async (context, payload) => {

            const { _id } = context.getters.getSelectedCompany 

            let url = `companies/${_id}`

            await axiosInstance.put(url, payload,
                { headers: {'Authorization': localStorage.getItem('token')} })

            const response = await axiosInstance.get(url,
                { headers: {'Authorization': localStorage.getItem('token')} })
            
            context.commit('selectCompany', response.data)  
            context.dispatch('fetchCompanies')       
        },
        postCompany: async (context, payload) => {
            let url = `companies`

            const response = await axiosInstance.post(url, payload,
                { headers: {'Authorization': localStorage.getItem('token')} })

            console.log(response.data)
        }
        
    },
    modules: {}
}
