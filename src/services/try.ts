import { ref } from "vue";

interface Todo {
    id: number;
    description: string;
    completed: boolean;
}

// Make todoList reactive
export const todoList = ref<Todo[]>([
]);

export const submitTodo = (description: string) => {
    addTodo(description);
}

export const addTodo = (description: string) => {
    const newTodo = {
        id: Date.now(),
        description,
        completed: false,
    }
    todoList.value.push(newTodo);
}

export const toggleTodo = (id: number) => {
    const todo = todoList.value.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    console.log(todoList.value);
};

export const deleteTodo = (id: number) => {
    todoList.value = todoList.value.filter((todo) => todo.id !== id);
}

export const clicked = () => {
    console.log('clicked');
};
