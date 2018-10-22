<template>
  <div style="margin: 2%;">
    <q-table title="Pessoas" dense :data="pessoas" :columns="columns" row-key="name"/>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'
export default {
  name: 'Exibicao',
  data: function () {
    return {
      pessoas: [],
      columns: [
        {
          name: 'nome',
          label: 'Nome Completo',
          field: 'nome',
          requied: true,
          align: 'left',
          sortable: true,
          style: 'width: 500px'
        },
        { name: 'matricula', label: 'Matrícula', field: 'matricula' },
        { name: 'email', label: 'E-mail', field: 'email' },
        { name: 'senha', label: 'Senha', field: 'senha' }
        // { name: 'celular', label: 'Celular', field: 'celular' }
      ]
    }
  },
  mounted () {
    axios
      .get('https://script.google.com/macros/s/AKfycbx4LG29L4JgFIr7fuDTf8cjIdnz9JlpXG-IeBlpMPVCtd8foBY/exec')
      .then(response => {
        const { dados } = response.data
        this.pessoas = dados
        console.log(dados)
      })
  }
}
</script>
