<template>
  <div>
    <div></div>
    <vue-markdown-plus v-if=loaded :source=data></vue-markdown-plus>
  </div>
</template>

<script>
import VueMarkdownPlus from 'vue-markdown-plus'

export default {
  name: 'Lesson',
  components: {
    VueMarkdownPlus
  },
  props: {
    source: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loaded: false,
      data: '',
      lessonPath: '/lessons/'
    }
  },
  computed: {
    lesson () {
      return this.lessonPath + this.source
    }
  },
  mounted () {
    fetch(this.lesson).then(response => response.text()).then(data => {
      this.data = data
      this.loaded = true
    })
  }
}

</script>

<style scoped>

</style>
