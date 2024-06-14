<template>
  <div class="grid grid-cols-1 gap-4 p-5">
      <section>
          <h2>SelectMenu</h2>
          <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
              <li>官方文件</li>
          </NuxtLink>
          <hr class="my-3">
      </section>
      <!-- 組件測試區 -->
      <section>
          <USelectMenu class="w-64" v-model="selected" :options="people" multiple placeholder="Select people" />
      </section>
      {{ selected }}
  </div>
</template>

<script setup>
const route = useRoute();

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref([])
</script>

<style lang="scss">

</style>