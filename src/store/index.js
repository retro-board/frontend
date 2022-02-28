import { createStore } from 'vuex'
import { useRouter } from "vue-router"
import jwtDecode from "jwt-decode";
import axiosClient from '../axios';

const store = createStore({
    state: {
        company: {
            data: {
                name: null,
                domain: null,
                subDomain: null,
                enabled: false,
            }
        },
        boards: {
            loading: true,
            data: [],
        },
        board: {
            name: null,
        },
        user: {
            data: {
                id: null,
                name: null,
                role: null,
                perms: [],
            },
            token: sessionStorage.getItem('TOKEN'),
        },
    },
    getters: {
        getCompany: state => {
            return state.company;
        },
        getBoard: state => {
            return state.board;
        },
        getUser: state => {
            return state.user;
        },
        allowedTo: (state) => (checkPerm) => {
            if (
                state.user.token === null ||
                state.user.data.perms === null ||
                state.user.data.perms === undefined
            ) {
                return false;
            }

            for (let i = 0; i < state.user.data.perms.length; i++) {
                let perm = state.user.data.perms[i]
                if (perm === checkPerm) {
                    return true
                }
            }

            return false
        },
    },
    actions: {
        logout({commit}) {
            commit('logout')
        },
        parseLoginData({commit}) {
            const router = useRouter();

            let cookies = document.cookie.split(';')
            if (cookies[0] === "") {
                commit('logout')
                router.push({name: "Home"})
                return
            }

            for (let step = 0; step < cookies.length; step++) {
                let cookie = cookies[step].split('=');
                let dataset = {}
                switch (cookie[0].trim()) {
                    case 'retro_user':
                        dataset = jwtDecode(cookie[1]);
                        commit('setUser', {
                            id: dataset.id,
                            name: dataset.name,
                            role: dataset.role,
                            perms: dataset.perms,
                        });
                        break;
                    case 'retro_company':
                        dataset = jwtDecode(cookie[1]);
                        commit('setCompany', {
                            enabled: dataset.enabled,
                            subDomain: dataset.subdomain,
                            domain: dataset.domain,
                            companyName: dataset.name,
                        });
                        break;
                }
            }
        },
        createCompany({commit}, companyInfo) {
            return axiosClient.post("/company", companyInfo)
                .then(({data}) => {
                    commit('setCompany', {
                        enabled: data.enabled,
                        subDomain: data.subDomain,
                        domain: data.domain,
                        companyName: data.name,
                        role: data.user_role,
                    });
                    return data;
                })
        },
        getBoards({commit}) {
            let getURL = "/boards"
                getURL += "?subdomain=" + this.state.company.data.subDomain;

            return axiosClient.get(getURL)
                .then(({data}) => {
                    commit("setBoardsLoading", false);
                    commit('setBoards', data);
                    return data;
                })
        },
        getCompanyInfo({commit}) {
            let getURL = "/company"
                getURL += "?subdomain=" + this.state.company.data.subDomain;
            return axiosClient.get(getURL).then(({data}) => {
                commit("setCompanyLoading", false);
                commit("setCompanyInfo", data);
                return data;
            })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.company.data = {};
            document.cookie = "retro_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "retro_company=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, userData) => {
            state.user.data = userData;
            state.user.data.id = userData.id;
            state.user.data.name = userData.name;
            state.user.data.role = userData.role;
            state.user.data.perms = userData.perms;

            sessionStorage.setItem('TOKEN', userData.id);
        },
        setCompany: (state, companyData) => {
            state.company.data = companyData;

            state.company.data.name = companyData.companyName;
            state.company.data.domain = companyData.domain;
            state.company.data.subDomain = companyData.subDomain;
            state.company.data.enabled = companyData.enabled;
        },
        setBoardsLoading: (state, loading) => {
            state.boards.loading = loading;
        },
        setCompanyLoading: (state, loading) => {
            state.company.loading = loading
        },
        setBoards: (state, boardsData) => {
            state.boards.data = boardsData;
        },
    },
    modules: {},
})

export default store