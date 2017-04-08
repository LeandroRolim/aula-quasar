<template>
  <div>
    <table class="table table-hover">
      <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Preço</th>
    </tr>
    </thead>
      <tbody>
      <tr v-for="product in products">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  export default {
    computed: {
      products: () => store.getters.getProducts
    }
  }
</script>

