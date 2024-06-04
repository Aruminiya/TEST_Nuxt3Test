<template>
    <div class="grid grid-cols-4 m-10 gap-4">
        <div v-for="p in products">
            <ProductCart :product="p"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'product',
});

const { data } = await useFetch('https://fakestoreapi.com/products');
const products = data.value;
console.log(products);
</script>