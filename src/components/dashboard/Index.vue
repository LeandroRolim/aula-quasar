<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        ERP Grupo Lira
      </q-toolbar-title>
      <button class="desktop-only">
        <i>lock_open</i>
      </button>
      <button class="electron-only">
        <i>remove</i>
      </button>
      <button @click="max" class="desktop-only">
        <i>web_asset</i>
      </button>
      <button class="electron-only">
        <i>clear</i>
      </button>
    </div>
    <LDrawer ref="drawer" tab_ref="ltab1"></LDrawer>
    <LTabs ref="ltab1"></LTabs>
    <div slot="footer">
      Devoloper by Gropo Lira
    </div>
  </q-layout>
</template>

<script>
import { AppFullscreen } from 'quasar'
import LDrawer from './Drawer'
import LTabs from './Tabs'
export default {
  data () {
    return {}
  },
  methods: {
    max: () => AppFullscreen.toggle()
  },
  components: {
    LDrawer,
    LTabs
  }
}
</script>

