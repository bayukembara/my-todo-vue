<script setup lang="ts">
const props = defineProps<{ buttonTitle: string }>();
</script>
<template>
  <button>
    {{ props.buttonTitle }}
  </button>
</template>
