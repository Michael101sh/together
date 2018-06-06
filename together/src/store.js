import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export const store = new Vuex.Store({
    state: {
        user: null,
        feel: 999,
    },
    mutations: {
        setStoredNumber(state, newNumber) {
            state.count = newNumber;
        },
        setUser(state, user) {
            state.user = user;
        },
        setFeeling(state, value) {
            state.feel = value;
        },
        reset(state) {
            state.user = null;
            state.feel = 999;
        }
    },
    plugins: [vuexLocal.plugin]
});