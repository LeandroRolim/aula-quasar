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

      <button v-on:click.prevent="addProduct">Submit</button>
    </form>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  export default {
    data () {
      return {
        name: '',
        price: 0.0,
        id: 0
      }
    },
    methods: {
      addProduct () {
        store.commit('ADD_PRODUCT', {
          id: this.id,
          price: this.price,
          name: this.name
        })
      }
    }
  }
</script>
