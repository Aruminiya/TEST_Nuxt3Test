<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
          <h2>Breadcrumb</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <UBreadcrumb :links="links" />
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

const links = ref([{
  label: '首頁',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'NuxtUI 測試',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/uiTest'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]);
</script>