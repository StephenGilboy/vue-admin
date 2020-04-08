import axios from 'axios';

export class Todo {
    public Id: number;

    public Title: string;

    public Completed: boolean;

    public UserId: number;

    constructor(id  = -1, title = '', completed = false, userId = -1) {
        this.Id = id;
        this.Title = title;
        this.Completed = completed;
        this.UserId = userId;
    }
}

type ApiTodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const getTodos = async (): Promise<Todo[]> => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos');
    if (response.status === 200) {
        const data = response.data as ApiTodo[];
        return data.map(d => new Todo(d.id, d.title, d.completed, d.userId));
    } else {
        console.error(response.statusText);
        return [];
    }
};
