<template>
    <h3>useAsyncState</h3>
    {{ state }} {{ isReady }} {{ isLoading }}
</template>

<script setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core'

const { state, isReady, isLoading } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(t => t.data),
  { id: null },
)

console.log(state.value, isReady.value, isLoading.value);
</script>