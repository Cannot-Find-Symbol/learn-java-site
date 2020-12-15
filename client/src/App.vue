<template>
  <v-app>
    <TopNavigationBar/>
    <LeftNavigationBar/>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import TopNavigationBar from '@/components/app/TopNavigationBar'
import LeftNavigationBar from '@/components/app/LeftNavigationBar'
import Footer from '@/components/app/Footer'

export default {
  name: 'App',

  components: {
    Footer,
    LeftNavigationBar,
    TopNavigationBar
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>

</style>
