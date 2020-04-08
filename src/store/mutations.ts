import {MutationTree} from "vuex";
import {RootState, MutationTypes} from "@/store/types";
import {Todo} from "@/domain/Todo";

export const mutations: MutationTree<RootState> = {
    [MutationTypes.SET_TODOS](state, todos: Todo[]) {
        state.todos = todos;
    }
};
