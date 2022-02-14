import { createStore } from 'vuex'
import jwtDecode from "jwt-decode";

const store = createStore({
    state: {
        company: {
            name: null,
        },
        board: {
            name: null,
        },
        user: {
            id: null,
            name: null,
            token: sessionStorage.getItem('TOKEN'),
            role: null,
        },
    },
    getters: {},
    actions: {
        logout({commit}) {
            commit('logout')
        },
        getUserData({commit}) {
            let cookies = document.cookie.split(';');
            for (let step = 0; step < cookies.length; step++) {
                let cookie = cookies[step].split('=');
                if (cookie[0] === 'retro_user') {
                    let user = jwtDecode(cookie[1]);
                    commit('setUser', {
                        id: user.id,
                        name: user.name,
                        domain: user.domain,
                        role: user.role,
                    });
                }
            }
        },
    },
    mutations: {
        logout: (state) => {
            state.user.id = null;
            state.user.name = null;
            state.company.name = null;
            state.user.role = null;
            sessionStorage.removeItem('TOKEN')
        },
        setUser(state, userData) {
            state.user.id = userData.id;
            state.user.name = userData.name;
            state.company.name = userData.domain;
            state.user.role = userData.role;
            sessionStorage.setItem('TOKEN', userData.id);
        },
    },
    modules: {},
})

export default store