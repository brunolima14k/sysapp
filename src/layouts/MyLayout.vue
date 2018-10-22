<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary toolbar">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          <!-- Syspp -->
          <!-- <div slot="subtitle">Projeto para avaliação de pontualidade dos professores </div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter style="padding-top: 0;">
        <q-list-header style="font-size: 18px;"
          class="toolbar bg-blue-10 text-white text-center shadow-4 flex flex-center">
          <!-- <q-icon name="menu" /> -->
          Syspp
        </q-list-header>
        <q-item class="item-menu" to="/dashboard">
          <q-item-side icon="home" />
          <q-item-main label="Home" />
        </q-item>
        <q-item class="item-menu" to="/horario">
          <q-item-side icon="calendar_today" />
          <q-item-main label="Horários" />
        </q-item>
        <q-item class="item-menu" to="/Exibicao">
          <q-item-side icon="find_in_page" />
          <q-item-main label="Exibir" />
        </q-item>
        <q-item class="item-menu" to="/Cadastro">
          <q-item-side icon="assignment_ind" />
          <q-item-main label="Cadastrar" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.toolbar {
  height: 70px;
}

.item-menu {
  padding: 20px;
}
</style>
