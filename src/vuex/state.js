function load (component) {
  return require(`components/${component}.vue`)
}

export default {
  products: [],
  sidebar: [
    {
      icon: 'shop',
      label: 'Usuários',
      key: 1,
      items: [
        {
          icon: 'shop',
          label: 'Listar',
          component: load('product/List')
        }
      ]
    },
    {
      icon: 'shop',
      label: 'Produtos',
      key: 2,
      items: [
        {
          icon: 'shop',
          label: 'Listar',
          component: load('product/List')
        }
      ]
    },
    {
      icon: 'message',
      label: 'Teste',
      key: 2,
      items: [
        {
          icon: 'shop',
          label: 'Cadastrar',
          component: load('product/List')
        }
      ]
    }
  ]
}
