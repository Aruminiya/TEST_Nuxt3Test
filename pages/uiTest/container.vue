<template>
    <div class="grid grid-cols-1 gap-4 p-5">
        <section>
            <h2>Container</h2>
            <NuxtLink class="alink" target="_blank" :to="'https://ui.nuxt.com/components/' + route.path.split('/')[route.path.split('/').length - 1]">
                <li>官方文件</li>
            </NuxtLink>
            <hr class="my-3">
        </section>
        <!-- 組件測試區 -->
        <section>
            <UContainer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque dicta, adipisci animi excepturi laborum porro eveniet, deserunt quia cumque iste? Repudiandae voluptate, architecto molestias sapiente cumque optio ipsa amet?
                Ab, inventore! Magni reprehenderit, deleniti, nihil, sit similique nulla ullam atque placeat tenetur asperiores ea laborum amet voluptas quidem animi. Quas in ducimus eum provident perspiciatis voluptatibus ipsa quam perferendis.
                Molestias natus nobis distinctio illum id ipsa maxime voluptatibus enim itaque totam officiis a sapiente temporibus, perferendis quidem cupiditate, fugit praesentium. Eius deleniti explicabo architecto non iusto! Aut, similique voluptatum?
                Aliquam libero ullam soluta quas fugit? Temporibus molestias libero amet pariatur omnis sint, non asperiores qui sit perferendis incidunt voluptatibus, quae repellat quisquam voluptas. Laborum voluptate veritatis tempora quia natus.
                Nihil perspiciatis natus eum commodi, quas tenetur unde sint ullam? Dolorem non modi voluptate! Expedita vel, qui dolore illo veritatis esse accusamus error eius laboriosam, quas hic, voluptate facilis beatae.</p>
            </UContainer>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();

</script>

<style lang="scss">

</style>