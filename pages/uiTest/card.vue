<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>{{ route.path.split('/')[route.path.split('/').length - 1].charAt(0).toUpperCase() + route.path.split('/')[route.path.split('/').length - 1].slice(1)}}</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <UCard>
                <template #header>
                <h1>卡片標題1</h1>
                </template>

                <h3>卡片內容1</h3>
                <p>01 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quas impedit repudiandae est nemo dignissimos ad omnis quos obcaecati. Voluptate maiores quasi doloribus iure facere rem praesentium autem dolore esse.</p>

                <template #footer>
                <p>卡片結尾1</p>
                </template>
            </UCard>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss">

</style>