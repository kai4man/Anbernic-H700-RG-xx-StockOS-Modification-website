import { defineBoot } from '#q-app/wrappers'
import { VMarkdownView } from 'vue3-markdown'
import 'vue3-markdown/dist/vue3-markdown.css'

export default defineBoot(({ app }) => {
  app.component('VMarkdownView', VMarkdownView)
})
