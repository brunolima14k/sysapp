<template>
  <div style="margin: 2%;">
    <q-table title="Horário" dense :data="horario" :columns="columns" row-key="name"/>
  </div>
</template>

<style>
.celula {
  border: 2px solid red;
  text-align: center;
  padding: 20px;
}
</style>

<script>
export default {
  name: 'Teste',
  data: function () {
    return {
      columns: [
        { name: 'horario', label: 'Horário', field: 'col1', style: 'text-align: center;' },
        { name: 'domingo', label: 'Domingo', field: 'col2', style: 'text-align: center;' },
        { name: 'segunda', label: 'Segunda-Feira', field: 'col3', style: 'text-align: center;' },
        { name: 'terca', label: 'Terça-Feira', field: 'col4', style: 'text-align: center;' },
        { name: 'quarta', label: 'Quarta-Feira', field: 'col5', style: 'text-align: center;' },
        { name: 'quinta', label: 'Quinta-Feira', field: 'col6', style: 'text-align: center;' },
        { name: 'sexta', label: 'Sexta-Feira', field: 'col7', style: 'text-align: center;' },
        { name: 'sabado', label: 'Sábado', field: 'col8', style: 'text-align: center;' }
      ],
      horario: [
        {
          col1: 'Tarde/A',
          col2: '',
          col3: '',
          col4: '',
          col5: 'IA',
          col6: '',
          col7: 'CANA',
          col8: ''
        },
        {
          col1: 'Tarde/B',
          col2: 'TCC',
          col3: '',
          col4: '',
          col5: 'IA',
          col6: '',
          col7: '',
          col8: ''
        },
        {
          col1: 'Noite/A',
          col2: '',
          col3: 'TCC',
          col4: '',
          col5: 'IA',
          col6: 'CANA',
          col7: '',
          col8: ''
        },
        {
          col1: 'Noite/B',
          col2: '',
          col3: 'SD',
          col4: '',
          col5: '',
          col6: 'SD',
          col7: '',
          col8: ''
        }
      ]
    }
  }
}
</script>
