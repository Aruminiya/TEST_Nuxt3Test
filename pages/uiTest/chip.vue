<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>Chip</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <UChip color="red">
                <UButton icon="i-heroicons-inbox" color="gray" />
            </UChip>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

</script>

<style lang="scss">

</style>