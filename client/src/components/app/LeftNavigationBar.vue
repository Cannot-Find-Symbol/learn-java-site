<template>
  <v-navigation-drawer permanent app clipped expand-on-hover :mini-variant.sync="mini">
    <v-list>
      <v-list-group :prepend-icon="learn.icon" no-action>
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="learn.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item
          v-for="child in learn.chapters"
          :key="child.title"
          :v-text="child.title"
          :to="child.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item :to="{ path: '/faq/'}">
        <v-list-item-icon>
          <v-icon>mdi-help-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>FAQ</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ path: '/livehelp'}">
        <v-list-item-icon>
          <v-icon>mdi-account-voice</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Live Help</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftBar',
  data () {
    return {
      mini: true,
      expanded: false,
      learn: {
        title: 'Learn',
        icon: 'mdi-school',
        chapters: [
          {
            title: 'Getting Started',
            to: '/getting-started.md'
          },
          {
            title: 'Chapter 1',
            to: '/chapter-1.md'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
