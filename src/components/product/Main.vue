<template>
  <div>
    <ProductForm></ProductForm>
    <ProductList :products="products"></ProductList>
   </div>
</template>

<script>
  import ProductList from './List.vue'
  import ProductForm from './Form.vue'
  export default {
    data () {
      return {
        products: [
          {
            id: 1,
            name: 'pão',
            price: 0.10
          },
          {
            id: 2,
            name: 'café',
            price: 3.00
          }
        ]
      }
    },
    methods: {
      addProduct () {
        this.products.push({
          id: this.id,
          name: this.name,
          price: this.price
        })
        this.id++
        this.name = ''
        this.price = 0.0
      }
    },
    components: {
      ProductList,
      ProductForm
    }
  }
</script>

<style lang="css">

</style>
