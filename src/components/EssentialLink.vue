<template>
  <q-expansion-item
    v-if="children && children.length"
    :label="title"
    :icon="icon"
    dense
    :default-opened="hasActiveChild"
  >
    <EssentialLink
      v-for="(child, idx) in children"
      :key="idx"
      v-bind="child"
      dense
      class="q-pl-lg"
    />
  </q-expansion-item>

  <q-item
    v-else
    clickable v-ripple dense
    tag="a"
    :href="link"
    :class="{'bg-primary text-white': isActive}"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import EssentialLink from './EssentialLink.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  title: String,
  caption: String,
  link: String,
  icon: String,
  children: {
    type: Array,
    default: () => []
  }
})

const isActive = computed(() => {
  return route.path === props.link
})

const hasActiveChild = computed(() => {
  if (!props.children || !props.children.length) return false
  return props.children.some(child => {
    if (!child.link) return false
    if (child.link === route.path) return true
    if (child.link !== '/' && route.path.startsWith(child.link)) return true
    
    return false
  })
})
</script>