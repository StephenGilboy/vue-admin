import {ActionTypes, RootState, MutationTypes} from "@/store/types";
import {ActionTree} from "vuex";
import {Todo, getTodos} from "@/domain/Todo";

export const actions: ActionTree<RootState, RootState> = {
    async [ActionTypes.LOAD_TODOS]({ commit }) {
        const todos: Todo[] = await getTodos();
        commit(MutationTypes.SET_TODOS, todos);
    }
};
