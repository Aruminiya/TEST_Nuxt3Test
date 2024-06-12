<template>
    <h1>NuxtUI 測試</h1>
    <div class="mx-3" v-for="uiShowLink in uiShowLinks" :key="uiShowLink.to">
        <NuxtLink class="alink" :to="uiShowLink.to"><li>{{uiShowLink.name}}</li></NuxtLink>
    </div>  

    


</template>

<script setup>

const rootRouter = 'uiTest';
const nuxtUiOfficailLink = 'https://ui.nuxt.com/components';
const uiShowLinks = ref([
    {
        to:`${rootRouter}/breadcrumb`,
        name: 'Breadcrumb',
    },
    {
        to:`${rootRouter}/button`,
        name: 'Button',
    },
    {
        to:`${rootRouter}/card`,
        name: 'Card',
    },
    {
        to:`${rootRouter}/carousel`,
        name: 'Carousel',
    },
    {
        to:`${rootRouter}/checkbox`,
        name: 'Checkbox',
    },
    {
        to:`${rootRouter}/chip`,
        name: 'Chip',
    },
    {
        to:`${rootRouter}/command-palette`,
        name: 'CommandPalette',
    },
    {
        to:`${rootRouter}/container`,
        name: 'Container',
    },
    {
        to:`${rootRouter}/context-menu`,
        name: 'ContextMenu',
    },
    {
        to:`${rootRouter}/date-picker`,
        name: 'DatePicker',
    },
])
</script>

<style lang="scss">

</style>