<template>
  <q-page class="text-center" style="margin-top: 15%;">
    <h3>BEM-VINDO AO SYSPP</h3>
    <div class="text-weight-light">O sistema Syspp foi elaborado para a disciplina de Desenvolvimento Web
      para servir como sistema de pontuabilidade de professores. Caso seja cadastrado por favor entre na sua
      conta, caso não seja realizer o cadastro.
      <q-btn label="Entra" size="sm" color="primary" to="/login" /> ou
      <q-btn label="Cadastra-se" size="sm" color="primary" to="/login" />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Principal'
}
</script>
