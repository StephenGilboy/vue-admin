import {GetterTree} from "vuex";
import {GetterTypes, RootState} from "@/store/types";

export const getters: GetterTree<RootState, RootState> = {
    [GetterTypes.GET_TODOS](state) {
        return state.todos;
    }
};
