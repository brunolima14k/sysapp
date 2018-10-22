<template>
  <div id="q-app">
    <div align="center" style="margin-top: 10%;">
      <q-card inline style="width: 50%; padding: 20px" align="center" >
        <q-card-title>
          Cadastrar Usuário
        </q-card-title>
        <q-input v-model="text" float-label="Nome" placeholder="Digite seu nome:" />
        <q-input v-model="number" type="number" float-label="Matrícula" placeholder="Digite sua matrícula:" />
        <q-input v-model="text" float-label="Email" placeholder="Digite seu email:" />
        <q-input v-model="text" type="password" float-label="Senha:" placeholder="Digite sua senha:" />
        <q-input v-model="text" type="password" float-label="Confirmação de Senha:" placeholder="Confirme sua senha:" />
        <q-card-separator />
        <q-btn align="center" color="primary" label="Cancelar" style="margin-top: 20px; margin-right: 10px" />
        <q-btn align="center" color="primary" label="Cadastrar" style="margin-top: 20px;" />
      </q-card>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Cadastro'
}
</script>
