import {Todo} from "@/domain/Todo";

export interface RootState {
    todos: Todo[];
}

export const ActionTypes = {
    LOAD_TODOS: 'LOAD_TODOS',
};

export const MutationTypes = {
    SET_TODOS: 'SET_TODOS',
};

export const GetterTypes = {
    GET_TODOS: 'GET_TODOS',
};
