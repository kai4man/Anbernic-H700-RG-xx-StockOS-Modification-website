<template>
  <q-page class="q-pa-xl">
    <div v-if="isLoading" class="text-center">
      <q-spinner size="3em" />
      <div>Загрузка контента...</div>
    </div>

    <div v-else-if="error" class="text-negative">
      Ошибка загрузки: {{ error }}
      <br>
      <small>Файл: {{ contentFile }}</small>
    </div>

    <div v-else>
      <VMarkdownView :data-theme="theme" :content="content" />
    </div>
  </q-page>
</template>

<script setup>
import { toRef } from 'vue'
import { useMarkdownLoader } from '../composables/useMarkdownLoader'
import { useTheme } from 'src/composables/useTheme'

const props = defineProps({
  contentFile: {
    type: String,
    default: 'index.md'
  }
})

const contentFileRef = toRef(props, 'contentFile')
const { content, isLoading, error } = useMarkdownLoader(contentFileRef)
const { theme } = useTheme()

</script>