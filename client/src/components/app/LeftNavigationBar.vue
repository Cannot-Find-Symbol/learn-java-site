<template>
  <v-navigation-drawer app clipped expand-on-hover :mini-variant.sync="mini">
    <v-list>
      <v-list-item class="px-2">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftBar',
  data () {
    return {
      mini: true
    }
  }
}
</script>

<style scoped>

</style>
