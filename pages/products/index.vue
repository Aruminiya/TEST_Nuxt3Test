<template>
    <div class="grid grid-cols-4 m-10 gap-4">
        <div v-for="p in prosucts">
            <UCard>
                <template #header>
                <img :src="p.image" alt="">
                </template>

                <h1 class="h1">{{p.title}}</h1>
                <p>{{ p.description }}</p>

                <template #footer>
                <p>rate: {{ p.rating.rate }}</p>
                <p>count: {{ p.rating.count }}</p>
                </template>
            </UCard>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'product',
});

const { data } = await useFetch('https://fakestoreapi.com/products');
const prosucts = data._value;

</script>