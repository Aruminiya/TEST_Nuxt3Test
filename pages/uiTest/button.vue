<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>Button</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <UButton><p @click="console.log('已點擊按鈕')">按鈕點擊</p></UButton>
            <UButton color="red" variant="solid" size="xl">Button</UButton>
            <UButton>Button</UButton>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

</script>

<style lang="scss">

</style>