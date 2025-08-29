<template>
  <q-page class="q-pa-md q-pa-md-xl">
    <div v-if="isLoading" class="skeleton-container">
      <q-skeleton height="60px" class="q-mb-lg" />
      
      <div class="q-mb-md">
        <q-skeleton height="20px" width="80%" />
        <q-skeleton height="20px" width="90%" class="q-mt-sm" />
        <q-skeleton height="20px" width="75%" class="q-mt-sm" />
      </div>
      
      <div class="q-mb-md">
        <q-skeleton height="20px" width="85%" />
        <q-skeleton height="20px" width="70%" class="q-mt-sm" />
        <q-skeleton height="20px" width="95%" class="q-mt-sm" />
        <q-skeleton height="20px" width="60%" class="q-mt-sm" />
      </div>
      
      <div class="q-mb-md">
        <q-skeleton height="20px" width="90%" />
        <q-skeleton height="20px" width="80%" class="q-mt-sm" />
      </div>
      
      <q-skeleton height="200px" class="q-mt-lg" />
    </div>

    <div v-else-if="error" class="text-negative">
      Download error: {{ error }}<br>
      <small>Fail: {{ contentFile }}</small>
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