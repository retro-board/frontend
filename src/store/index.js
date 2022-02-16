import { createStore } from 'vuex'
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
        board: {
            name: null,
        },
        user: {
            data: {
                id: null,
                name: null,
                role: null,
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
    },
    actions: {
        logout({commit}) {
            commit('logout')
        },
        parseLoginData({commit}) {
            let cookies = document.cookie.split(';');
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
                        });
                        break;
                    case 'retro_company':
                        dataset = jwtDecode(cookie[1]);
                        commit('setCompany', {
                            companyEnabled: dataset.enabled,
                            subDomain: dataset.subDomain,
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
                        companyEnabled: data.enabled,
                        subDomain: data.subDomain,
                        domain: data.domain,
                        companyName: data.name,
                        role: data.user_role,
                    });
                    return data;
                })
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.company.data = {};

            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, userData) => {
            state.user.data = userData;
            state.user.data.id = userData.id;
            state.user.data.name = userData.name;
            state.user.data.role = userData.role;

            sessionStorage.setItem('TOKEN', userData.id);
        },
        setCompany: (state, companyData) => {
            state.company.data = companyData;

            state.company.data.name = companyData.companyName;
            state.company.data.domain = companyData.domain;
            state.company.data.subDomain = companyData.subDomain;
            state.company.data.enabled = companyData.enabled;
        },
    },
    modules: {},
})

export default store