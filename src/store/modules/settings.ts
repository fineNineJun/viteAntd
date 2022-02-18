import {Module} from "vuex";
import {SettingsState, RootStateTypes} from "store/interface";

const settings: Module<SettingsState, RootStateTypes> = {
    state() {
        return {
            logo: "GithubOutlined",
            title: "Vite Ts Antdv",
            isCollapse: false,
        }
    },
    getters: {
        logo: (state) => state.logo,
        title: (state) => state.title,
        isCollapse: (state) => state.isCollapse,
    },
    mutations: {
        TOGGLE_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        toggleCollapse({commit}) {
            commit("TOGGLE_COLLAPSE");
        }
    }
}

export default settings;