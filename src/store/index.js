import { createStore } from 'vuex'

const store = createStore({
    state: {
        company: {
            name: 'ChewedFeed',
        },
        board: {
            name: 'Network Team',
        },
        user: {
            token: null,
        },
    },
    getters: {},
    actions: {
        fetchUserData() {
            console.log("tester");
        }
    },
    mutations: {},
    modules: {},
})

export default store