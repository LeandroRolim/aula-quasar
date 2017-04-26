<template>
  <q-drawer swipe-only ref="drawer">
    <div class="list platform-delimiter">
      <div class="list-header">
        Menu
      </div>
      <q-collapsible v-for="item in sidebar" :key="item.key" group="sidebar" :icon="item.icon" :label="item.label">
        <div>
          <div v-for="subitem in item.items" class="item item-link drawer-closer" @click="openItem(subitem)">
            <i class="item-primary">{{ subitem.icon }}</i>
            <div class="item-content">{{ subitem.label }}</div>
          </div>
        </div>
      </q-collapsible>

    </div>
  </q-drawer>
</template>

<script>
  export default {
    methods: {
      open: function () {
        this.$refs.drawer.open()
      },
      openItem: function (subitem) {
        this.$emit('openItem', subitem)
      }
    },
    computed: {
      sidebar: function () {
        return this.$store.state.sidebar
      }
    }
  }
</script>
