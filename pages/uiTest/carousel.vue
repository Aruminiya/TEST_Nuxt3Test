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
            <UCarousel
                ref="carouselRef"
                v-slot="{ item }"
                :items="items"
                :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden"
                indicators
            >
                <div class="imgContainer">
                    <img :src="item" class="w-full" draggable="false">
                </div>
                
            </UCarousel>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

const items = ref([
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
  'https://picsum.photos/1920/1080?random=7',
  'https://picsum.photos/1920/1080?random=8',
  'https://picsum.photos/1920/1080?random=9',
  'https://picsum.photos/1920/1080?random=10'
]);

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<style lang="scss">
.imgContainer{
    width: 100%;
    height: 600px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

}
</style>