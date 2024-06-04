<template>
    <div>
      <p>關於我們頁面</p>
      <p>GET: {{ getData }}</p>
      <p>POST: {{ postData }}</p>
      <input class="border" type="text" v-model="test">
      {{ test }}
    </div>
</template>

<script setup>
  const getData  = await useFetch('/api/ninja?name=leo').data;
  const postData  = await useFetch('/api/ninja',{
    method: 'post',
    body: {age: 30}
  }).data;
  console.log(getData, postData)
  const test = ref('hya!');
</script>