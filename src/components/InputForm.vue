<script setup lang="ts">
import Button from "./Button.vue";
import { defineEmits, ref } from "vue";
import { submitTodo, clicked } from "../services/try";

const props = defineProps<{
  msg: string;
}>();

const textTodo = ref("");

const handleSubmit = () => {
  submitTodo(textTodo.value);
};
</script>

<template>
  <div class="flex flex-col">
    <label for="" class="text-left mb-2 text-xl font-light">{{
      props.msg
    }}</label>
    <div class="flex">
      <input
        v-model="textTodo"
        type="text"
        @keyup.enter.prevent="handleSubmit"
        class="w-full rounded-md outline outline-1 outline-sky-400 focus:outline-2 focus:outline-sky-500 text-black"
      />
      <Button
        buttonTitle="Add Todo"
        @click="handleSubmit"
        class="bg-sky-400 px-2 py-2 w-auto h-auto text-nowrap rounded-md ml-2 hover:bg-sky-500 hover:text-white"
      />
    </div>
  </div>
</template>
