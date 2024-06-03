<template>
  <p>產品ID: {{ id }}</p>
</template>

<script>
export default {
    data(){
        return{
            id: useRoute().params.id,
        }
    },
    mounted() {
        // console.log(this.id)
    }
}
</script>