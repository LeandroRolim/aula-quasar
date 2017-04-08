<template>
  <div>
    <ProductForm></ProductForm>
    <ProductList></ProductList>
   </div>
</template>

<script>
  import ProductList from './List.vue'
  import ProductForm from './Form.vue'
  export default {
    components: {
      ProductList,
      ProductForm
    }
  }
</script>

<style lang="css">

</style>
