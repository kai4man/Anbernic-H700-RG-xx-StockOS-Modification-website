import { useQuasar, LocalStorage } from 'quasar'
import { computed, onMounted } from 'vue'

export function useTheme() {
  const $q = useQuasar()

  const isDark = computed(() => $q.dark.isActive)
  const theme = computed(() => (isDark.value ? 'dark' : 'light'))

  const themeIcon = computed(() => (isDark.value ? 'light_mode' : 'dark_mode'))

  const toggleTheme = () => {
    $q.dark.toggle()
    LocalStorage.set('darkMode', $q.dark.isActive)
  }

  const setTheme = (dark) => {
    $q.dark.set(dark)
    LocalStorage.set('darkMode', dark)
  }

  const initTheme = () => {
    const savedTheme = LocalStorage.getItem('darkMode')
    if (savedTheme !== null) {
      $q.dark.set(savedTheme)
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    theme,
    themeIcon,
    toggleTheme,
    setTheme,
  }
}
