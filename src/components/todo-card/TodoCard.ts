import Vue from 'vue';
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import { Todo } from '@/domain/Todo';

@Component({
    name: 'TodoCard',
})
export default class TodoCard extends Vue {
    @Prop() todo!: Todo;
}
