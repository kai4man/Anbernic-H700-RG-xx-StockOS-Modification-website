
<template>
  <q-layout view="lhh LpR lFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
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

const linksList = [
  {
    title: 'Welcome',
    link: '/'
  },
  {
    title: 'The Crew',
    link: '/'
  },
  {
    title: 'Release',
    children: [
      {
        title: 'Current',
        link: '/'
      },
      {
        title: 'Change Log',
        link: '/'
      },
    ]
  },
  {
    title: 'Modification function',
    children: [
      {
        title: 'SAMBA Temporary Server',
        link: '/'
      },
      {
        title: 'SSH Temporary Server',
        link: '/'
      },
      {
        title: 'Tiny Scraper',
        link: '/'
      },
      {
        title: 'Image Browser',
        link: '/'
      },
      {
        title: 'Custom Bezel Manager',
        link: '/'
      },
      {
        title: 'Themes Manager',
        link: '/'
      },
      {
        title: 'System Settings Modifier',
        link: '/'
      },
      {
        title: 'Modify System Tools',
        link: '/'
      },
      {
        title: 'Clock',
        link: '/'
      },
      {
        title: 'Java',
        link: '/'
      },
      {
        title: 'System Online Upgrade',
        link: '/'
      },
      {
        title: 'PortMaster',
        link: '/'
      },
      {
        title: 'System Monitor',
        link: '/'
      }
    ]
  },
  {
    title: 'Installation',
    children: [
      {
        title: 'Install Guide',
        link: '/'
      },
      {
        title: 'Artwork',
        link: '/'
      },
      {
        title: 'PortMaster',
        link: '/'
      }
    ]
  },
  {
    title: 'Themes',
    children: [
      {
        title: 'Категории',
        link: '/'
      },
    ]
  },
  {
    title: 'Systems',
    children: [
      {
        title: 'Бонусная система',
        link: '/'
      },
      {
        title: 'Бонусные уровни',
        link: '/'
      },
      {
        title: 'Акции',
        link: '/'
      },
      {
        title: 'Скидки',
        link: '/'
      }
    ]
  },
  {
    title: 'Devices',
    children: [
      {
        title: 'Anbernic',
        link: '/'
      },
    ]
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>