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
            <div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800">
              <div class="hidden sm:flex flex-col py-4">
              <UButton
                v-for="(range, index) in ranges"
                :key="index"
                :label="range.label"
                color="gray"
                variant="ghost"
                class="rounded-none px-6"
                :class="[isRangeSelected(range.duration) ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50']"
                truncate
                @click="selectRange(range.duration)"
              />
                </div>
                  <DatePicker v-model="selected" @close="close" />
                </div>
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