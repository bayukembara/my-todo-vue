<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Button from "./Button.vue";

const props = defineProps<{
  todo: { id: number; description: string; completed: boolean };
}>();

const emit = defineEmits<{ (e: "toggle", id: number): void }>();

const toggleTodo = () => {
  emit("toggle", props.todo.id);
};

const deleteTodo = () => {
  emit("delete", props.todo.id);
};
</script>

<template>
  <div class="flex grid-cols-3 justify-start items-center mt-2">
    <input
      type="checkbox"
      :checked="props.todo.completed"
      @change="toggleTodo"
      class="rounded-xl px-2 py-2 w-[20px] h-[20px] mr-2 outline-none focus:outline-sky-500"
    />
    <span :class="{ completed: props.todo.completed }" class="text-xl">
      {{ props.todo.description }}
    </span>
    <Button
      button-title="Delete"
      @click="deleteTodo"
      class="px-3 py-2 w-auto h-auto rounded-md ml-2 bg-red-400 hover:bg-red-500 text-nowrap"
    />
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
