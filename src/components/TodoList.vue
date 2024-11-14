<script setup lang="ts">
import Inputform from "./InputForm.vue";
import TodoItem from "./TodoItem.vue";
import { todoList, toggleTodo, deleteTodo } from "../services/try";
</script>

<template>
  <Inputform msg="Todo List" />
  <h1 v-if="todoList.length <= 0" class="mt-5 text-xl uppercase">
    No todo found
  </h1>
  <div v-else>
    <TodoItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      @toggle="toggleTodo"
      @delete="deleteTodo"
    />
  </div>
</template>
