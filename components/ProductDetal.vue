<template>
    <div class="grid grid-cols-2 m-10 gap-4">
        <div>
            <img :src="product.image" alt="">
        </div>
        <div>
            <h1 class="h1">{{product.title}}</h1>
            <p class="truncate">{{ product.description }}</p>
            <br>
            <p>rate: {{ product.rating.rate }}</p>
            <p>count: {{ product.rating.count }}</p>
            <br>
            <NuxtLink to="/products"><UButton>回到上產品列表</UButton></NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>