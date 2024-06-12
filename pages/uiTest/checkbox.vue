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
            <UCheckbox v-model="selected" name="notifications" label="Notifications" />
            selected : {{ selected }}
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

const selected = ref(true)

</script>

<style lang="scss">

</style>