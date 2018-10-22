<template>
  <div id="q-app">
    <div align="center" style="margin-top: 15%;">
      <q-card inline style="width: 20%; padding: 20px" align="center" >
        <q-card-title>
          LOGIN
        </q-card-title>
        <q-input v-model="login" float-label="Email" placeholder="Digite seu email:" />
        <q-input v-model="senha" type="password" float-label="Digite sua senha:" />
        <q-card-separator />
        <q-btn align="center" color="teal" label="Login" style="margin-top: 20px;" />
      </q-card>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Teste',
  data: function () {
    return {
      login: '',
      senha: ''
    }
  }
}
</script>
