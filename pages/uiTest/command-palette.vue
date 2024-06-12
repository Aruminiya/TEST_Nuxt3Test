<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>CommandPalette</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <UCommandPalette
                v-model="selected"
                multiple
                nullable
                :autoselect="false"
                :groups="[{ key: 'people', commands: people }]"
                :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
            />
            <h6>已選取：{{ selected }}</h6>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' }
]

const selected = ref([people[3]])
</script>

<style lang="scss">

</style>