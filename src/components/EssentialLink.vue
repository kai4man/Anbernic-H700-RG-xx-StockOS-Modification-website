<template>
  <q-expansion-item
    v-if="children && children.length"
    :label="title"
    :icon="icon"
    expand-separator dense
  >
    <EssentialLink
      v-for="(child, idx) in children"
      :key="idx"
      v-bind="child"
      dense
    />
  </q-expansion-item>

  <q-item
    v-else
    clickable v-ripple dense
    tag="a"
    :href="link"
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
defineProps({
  title: String,
  caption: String,
  link: String,
  icon: String,
  children: {
    type: Array,
    default: () => []
  }
})
import EssentialLink from './EssentialLink.vue'
</script>