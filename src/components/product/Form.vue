<template>
  <div>
    <form>
      <legend>Cadastrar produto</legend>
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
  import http from 'src/services/http'
  export default {
    data () {
      return {
        name: '',
        price: 0.0,
      }
    },
    methods: {
      addProduct () {
//        store.commit('ADD_PRODUCT', {
//          id: this.id,
//          price: this.price,
//          name: this.name
//        })
        const vm = this
        http.post('produtos/', {
          descricao: vm.name,
          valor: vm.price
        }).then((response) => {
          console.log('gravou dados')
          store.commit('ADD_PRODUCT', {
            id: response.data.ok,
            valor: vm.price,
            descricao: vm.name
          })
        })
      }
    }
  }
</script>
