export default {
  LOAD_PRODUCTS: function (state, payload) {
    state.products = payload
  },
  ADD_PRODUCT: (state, payload) => state.products.push(payload)
}
