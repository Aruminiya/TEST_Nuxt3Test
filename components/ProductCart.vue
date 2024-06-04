<template>
    <UCard>
        <template #header>
        <img :src="product.image" alt="">
        </template>

        <h5 class="h1">{{product.title}}</h5>
        <p class="truncate">{{ product.description }}</p>

        <template #footer>
        <p>rate: {{ product.rating.rate }}</p>
        <p>count: {{ product.rating.count }}</p>
        </template>

        <NuxtLink :to="'/products/'+product.id"><UButton>查看詳細內容</UButton></NuxtLink>
    </UCard>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

</script>