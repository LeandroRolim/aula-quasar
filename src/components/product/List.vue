<template>
  <div>
    <form>
      <legend>Cadastrar produto</legend>
      <div class="form-group">
        <label>id</label>
        <input type="number" v-model="id">
      </div>

      <div class="form-group">
        <label>Nome</label>
        <input type="text" v-model="name">
      </div>

      <div class="form-group">
        <label>Preço</label>
        <input type="number" step="0.01"  v-model="price">
      </div>

      <button v-on:click="addProduct">Submit</button>
    </form>


    <table class="table table-hover">000
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
  export default {
    data () {
      return {
        name: '',
        price: 0.0,
        id: 0,
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
          price: this.price,
        })
        this.id++
        this.name = ''
        this.price = 0.0
      }
    }
  }
</script>

<style lang="css"></style>
