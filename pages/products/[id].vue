<template>
  <Head>
    <Title>Nuxt 產品 | {{ oneProduct.title }}</Title>
  </Head>
  <ProductDetal :product="oneProduct"/>
</template>

<script setup>
definePageMeta({
  layout: 'product',
});

const id = useRoute().params.id;

const { data } = await useFetch('https://fakestoreapi.com/products/'+id);
const oneProduct = data._value;
console.log(oneProduct);
</script>