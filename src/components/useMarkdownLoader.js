import { ref, onMounted } from 'vue'

export function useMarkdownLoader(contentPath) {
  const content = ref('')
  const isLoading = ref(true)
  const error = ref(null)

  const loadContent = async () => {
    try {
      isLoading.value = true

      // Всегда используем fetch - это работает и в dev, и в production
      const baseUrl = process.env.DEV ? '' : '/'
      const response = await fetch(`${baseUrl}content/${contentPath}`)

      if (!response.ok) {
        throw new Error(`Не удалось загрузить файл: ${contentPath}`)
      }

      content.value = await response.text()
    } catch (err) {
      error.value = err.message
      console.error('Ошибка загрузки контента:', err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(loadContent)

  return {
    content,
    isLoading,
    error,
    reload: loadContent,
  }
}
