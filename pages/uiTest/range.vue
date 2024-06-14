<template>
  <div class="grid grid-cols-1 gap-4 p-5">
      <section>
          <h2>Divider</h2>
          <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
              <li>官方文件</li>
          </NuxtLink>
          <hr class="my-3">
      </section>
      <!-- 組件測試區 -->
      <section>
        <URange v-model="value" />
        {{ value }}
      </section>
  </div>
</template>

<script setup>
const route = useRoute();

const value = ref(50)
</script>

<style lang="scss">

</style>