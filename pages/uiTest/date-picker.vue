<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>DatePicker</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
          <UPopover :popper="{ placement: 'bottom-start' }">
            <UButton icon="i-heroicons-calendar-days-20-solid">
              {{ format(selected.start, 'd MMM, yyy') }} - {{ format(selected.end, 'd MMM, yyy') }}
            </UButton>

            <template #panel="{ close }">
              <DatePicker v-model="selected" @close="close" />
            </template>
          </UPopover>
        </section>
        {{ selected }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

import { sub, format } from 'date-fns'

const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })

</script>

<style lang="scss">

</style>