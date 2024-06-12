<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>ContextMenu</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <div class="w-full" @contextmenu.prevent="onContextMenu">
                <Placeholder class="h-96 select-none w-full flex items-center justify-center">
                Right click here
                </Placeholder>

                <UContextMenu v-model="isOpen" :virtual-element="virtualElement">
                <div class="p-4">
                    Menu
                </div>
                </UContextMenu>
            </div>
            {{ x }} {{ y }} {{ windowY }}
            <div style="height: 1000px;"></div>
            
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

import { useMouse, useWindowScroll } from '@vueuse/core'

const { x, y } = useMouse()
const { y: windowY } = useWindowScroll()

const isOpen = ref(false)
const virtualElement = ref({ getBoundingClientRect: () => ({}) })

function onContextMenu () {
  const top = unref(y) - unref(windowY)
  const left = unref(x)

  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left
  })

  isOpen.value = true
}
</script>

<style lang="scss">

</style>