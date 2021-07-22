<template>
  <div>
    <div></div>
    <v-container id="lesson-container">
      <div class="a" v-html="data"></div>
    </v-container>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'

export default {

  name: 'Lesson',
  components: {},
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
  methods: {
    loadLesson () {
      fetch(this.lesson).then(response => response.text()).then(data => {
        this.data = this.marked.render(data)
        this.loaded = true
      })
    }
  },
  watch: {
    lesson: {
      handler () {
        this.loadLesson()
      }
    }
  },
  created () {
    this.hljs = require('highlight.js')
    const vm = this
    this.marked = require('markdown-it')({
      highlight: function (str, lang) {
        if (lang && vm.hljs.getLanguage(lang)) {
          try {
            return '<pre class=""><code class="">' +
              vm.hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
              '</code></pre>'
          } catch (__) { }
        }

        return '<pre class=""><code>' + vm.marked.utils.escapeHtml(str) + '</code></pre>'
      }
    })
  },
  mounted () {
    this.loadLesson()
  }
}

</script>

<style>
#lesson-container {
  width: 80vw;
}

pre code {
  border: solid;
  background-color: #ffffff !important;
  display: block;
  width: max-content;
  height: max-content;
  padding: 1rem 1rem 1rem 1rem !important;
  white-space: pre-wrap
}
</style>
