import Vue from 'vue';
import Component from "vue-class-component";
import {mapGetters} from "vuex";
import {ActionTypes, GetterTypes} from "@/store/types";
import TodoCard from "@/components/todo-card/";
import {Todo} from "@/domain/Todo";

@Component({
    name: 'Home',
    components: {
        TodoCard,
    },
})
export default class Home extends Vue {

    get todos(): Todo[] {
        return this.$store.getters[GetterTypes.GET_TODOS];
    }
}
