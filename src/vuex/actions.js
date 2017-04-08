import http from 'src/services/http'

export default {
  load_products (context) {
    let products = []
    http.get('produtos/').then((response) => {
      products = response.data
      context.commit('LOAD_PRODUCTS', products)
    })
  }
}
