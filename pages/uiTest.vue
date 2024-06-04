<template>
    <h2>這是 NuxtUI 測試</h2>
    <UButton><p @click="btnClick">按鈕點擊</p></UButton><br>
    <UButton label="按鈕點擊2" />  
    <UButton color="red" variant="solid">Button</UButton>

    <div class="grid grid-cols-2 m-10 gap-4">
        <div>
            <UCard>
                <template #header>
                <h1>卡片標題1</h1>
                </template>

                <h3>卡片內容1</h3>
                <p>01 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quas impedit repudiandae est nemo dignissimos ad omnis quos obcaecati. Voluptate maiores quasi doloribus iure facere rem praesentium autem dolore esse.</p>

                <template #footer>
                <p>卡片結尾1</p>
                </template>
            </UCard>
        </div>
        <div>
            <UCard>
                <template #header>
                <h1>卡片標題2</h1>
                </template>

                <h3>卡片內容2</h3>
                <p>02 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quas impedit repudiandae est nemo dignissimos ad omnis quos obcaecati. Voluptate maiores quasi doloribus iure facere rem praesentium autem dolore esse.</p>

                <template #footer>
                <p>卡片結尾2</p>
                </template>
            </UCard>
        </div>
    </div>

    

    <UBreadcrumb :links="links" />
</template>

<script setup>

const links = ref([{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]);



const btnClick = () => {
    console.log('按鈕點擊');
    };

onMounted(() => {
    console.log('按鈕點擊');
    console.log(links.value);
})
</script>

<style lang="scss">

</style>