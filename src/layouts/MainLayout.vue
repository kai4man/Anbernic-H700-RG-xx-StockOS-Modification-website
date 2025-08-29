<template>
  <q-layout view="lHh LpR lFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-btn :icon="themeIcon" round @click="toggleTheme" />
        <q-toolbar-title>
          
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="drawer-header">
        <span>StockOS Modification</span>
      </div>
      <q-list class="q-pt-xl">
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useTheme } from 'src/composables/useTheme'

const { toggleTheme, themeIcon } = useTheme()

const linksList = [
  {
    title: 'Welcome',
    link: '/',
  },
  {
    title: 'The Crew',
    link: '/crew',
  },
  {
    title: 'Release',
    children: [
      {
        title: 'Current',
        link: 'release/current',
      },
      {
        title: 'Change Log',
        link: 'release/change_log',
      },
    ],
  },
  {
    title: 'Modification function',
    children: [
      {
        title: 'SAMBA Temporary Server',
        link: '/modification_function/samba',
      },
      {
        title: 'SSH Temporary Server',
        link: '/modification_function/ssh',
      },
      {
        title: 'Tiny Scraper',
        link: '/modification_function/tiny_scraper',
      },
      {
        title: 'Image Browser',
        link: '/modification_function/image_browser',
      },
      {
        title: 'Custom Bezel Manager',
        link: '/modification_function/bezel',
      },
      {
        title: 'Themes Manager',
        link: '/modification_function/themes_manager',
      },
      {
        title: 'System Settings Modifier',
        link: '/modification_function/system_settings',
      },
      {
        title: 'Modify System Tools',
        link: '/modification_function/system_tools',
      },
      {
        title: 'Clock',
        link: '/modification_function/clock',
      },
      {
        title: 'Java',
        link: '/modification_function/java',
      },
      {
        title: 'System Online Upgrade',
        link: '/modification_function/online_upgrade',
      },
      {
        title: 'PortMaster',
        link: '/modification_function/portmaster',
      },
      {
        title: 'System Monitor',
        link: '/modification_function/system_monitor',
      },
    ],
  },
  {
    title: 'Installation',
    children: [
      {
        title: 'Install Guide',
        link: '/installation/install_guide',
      },
      {
        title: 'Artwork',
        link: '/installation/artwork',
      },
      {
        title: 'PortMaster',
        link: '/installation/portmaster',
      },
    ],
  },
  {
    title: 'Themes',
    children: [
      {
        title: 'Themes',
        link: '/themes',
      },
    ],
  },
  {
    title: 'Systems',
    children: [
      {
        title: 'Systems',
        link: '/systems',
      }
    ],
  },
  {
    title: 'Devices',
    children: [
      {
        title: 'Anbernic',
        link: '/devices/anbernic',
      },
    ],
  },
]

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
