<template>
  <q-btn
    v-if="repoData"
    outline
    unelevated
    square
    :href="repoData.html_url"
    target="_blank"
    class="github-widget-btn"
    :color="buttonColor"
  >
    <q-icon name="fab fa-github" size="sm" class="q-mr-xs" />
    <q-icon name="star" size="xs" class="q-ml-sm q-mr-xs" />
    <span class="star-count">{{ repoData.stargazers_count }}</span>
    <q-icon name="call_split" size="xs" class="q-ml-sm q-mr-xs" />
    <span class="fork-count">{{ repoData.forks_count }}</span>
  </q-btn>
  
  <div v-else-if="loading" class="github-widget loading">
    <q-skeleton width="250px" height="24px" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from 'src/composables/useTheme'

const { buttonColor } = useTheme()

const repoData = ref(null)
const loading = ref(true)

const fetchRepoData = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/cbepx-me/Anbernic-H700-RG-xx-StockOS-Modification')
    if (response.ok) {
      repoData.value = await response.json()
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchRepoData()
})
</script>

<style scoped>
.github-widget {
  display: inline-block;
  background: #2d3748;
  color: white;
  padding: 6px 12px;
  font-size: 13px;
}

.github-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.github-link:hover {
  color: #f7fafc;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  padding: 2px 4px;
  margin: -2px -4px;
}

.repo-name {
  font-weight: 500;
}

.star-count, .fork-count {
  font-weight: 400;
  opacity: 0.9;
}

.loading {
  background: #4a5568;
  padding: 6px 12px;
}
</style>