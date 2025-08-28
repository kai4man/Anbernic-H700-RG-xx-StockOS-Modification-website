<template>
  <q-page class="q-pa-xl">
    <div v-if="isLoading" class="text-center">
      <q-spinner size="3em" />
      <div>Загрузка контента...</div>
    </div>

    <div v-else-if="error" class="text-negative">
      Ошибка загрузки: {{ error }}
    </div>

    <div v-else>
      <VMarkdownView :content="content" />
    </div>
  </q-page>
</template>

<script setup>
import { useMarkdownLoader } from '../components/useMarkdownLoader'
const { content, isLoading, error } = useMarkdownLoader('index.md')
</script>