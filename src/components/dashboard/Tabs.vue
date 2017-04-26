<script>
  export default {
    data () {
      return {
        count_created_tab: 1,
        tabs: []
      }
    },
    render (h) {
      let guias = []
      let contentTabs = []
      for (let o of this.tabs) {
        guias.push(h('q-tab', {
          props: {
            name: o.name,
            icon: o.icon
          },
          key: o.name
        }, [h('span', o.label), h('i', {class: 'red'}, 'close')]))
        contentTabs.push(h('div', {
          ref: o.name
        }, [h(o.component)]))
      }
      return h('div',
        {
          'class': {
            'layout-view': true
          }
        },
        [
          h('q-tabs', {
            props: {refs: this.$refs}
          }, guias),
          ...contentTabs
        ]
      )
    },
    methods: {
      addTab: function (payload) {
        this.tabs.push({
          name: 'tab' + this.count_created_tab++,
          component: payload.component,
          label: payload.label,
          icon: payload.icon
        })
      }
    }
  }
</script>
