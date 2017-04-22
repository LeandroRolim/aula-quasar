<template>
  <div class="layout-view">
    <q-tabs
      :refs="references()"
    >
      <q-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" icon="message">
        {{ tab.label }}
      </q-tab>
    </q-tabs>
    <!--<div ref="tab-1">-->
      <!--&lt;!&ndash;<LLoader :componente="tab.componente"></LLoader>&ndash;&gt;-->
    <!--</div>-->
    <div ref="tab-2">teste2</div>
    <!--<div ref="tab-3">teste3</div>-->
    <div v-for="tab in tabs">
      <LLoader :component="tab.component"></LLoader>

      <div :ref="tab.name">

        teste
      </div>
    </div>

    {{ references() }}
  </div>
</template>

<script>
  import LLoader from './Loader'
  export default {
    data () {
      return {
        count_created_tab: 1,
        tabs: [
          {
            name: 'tab-4',
            component: System.import('components/product/List.vue'),
            label: 'Teste',
            icon: 'user'
          },
          {
            name: 'tab-5',
            component: System.import('components/product/List.vue'),
            label: 'Teste',
            icon: 'user'
          }
        ]
      }
    },
    methods: {
      addTab: function (payload) {
        this.tabs.push(payload)
      },
      references: function () {
        const references = {}
        for (let o of this.tabs) {
          console.log(this.$refs. o.name)
          references[o.name] = Array.isArray(this.$refs[o.name]) ? this.$refs[o.name][0] : this.$refs[o.name]
        }
        console.log(references)
        return references
      }
    },
    components: {
      LLoader
    },
    computed: {}
  }
</script>
