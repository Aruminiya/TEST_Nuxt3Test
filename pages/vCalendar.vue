<template>
  <div>
    <h1>示例頁面</h1>
    <VDatePicker class="w-32" v-model.range.number="range" />
    {{ date }}
  </div>
</template>

<script setup>
const date = ref(new Date());
const range = ref({ start: 1578290400000, end: 1578636000000 });
</script>

<style lang="scss">

</style>