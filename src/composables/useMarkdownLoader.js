import { ref, watch, unref } from 'vue'

export function useMarkdownLoader(contentPath) {
  const content = ref('')
  const isLoading = ref(true)
  const error = ref(null)

  const loadContent = async (path) => {
    try {
      isLoading.value = true
      error.value = null

      if (!path) {
        throw new Error('Путь к файлу не указан')
      }

      const fullPath = `/content/${path}`
      const response = await fetch(fullPath)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Не удалось загрузить файл ${path}`)
      }

      const text = await response.text()

      if (text.trim().startsWith('<!doctype html>') || text.trim().startsWith('<html>')) {
        throw new Error(`Файл ${path} не найден в папке public/content/`)
      }
      content.value = text
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  watch(
    () => unref(contentPath),
    (newPath) => {
      if (newPath) {
        loadContent(newPath)
      }
    },
    { immediate: true },
  )

  return {
    content,
    isLoading,
    error,
    reload: () => loadContent(unref(contentPath)),
  }
}
