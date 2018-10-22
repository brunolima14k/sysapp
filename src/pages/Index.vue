<template>
  <!--q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
  -->
  <div align="center" style="margin: 8%;" >
    <q-card inline style="width: 50%; padding: 20px; margin: 2%;" align="center" >
          <q-table title="Horário" dense :data="horario" :columns="columns" row-key="name"/>
    </q-card>
    <q-card inline style="width: 20%; padding: 20px; margin: 2%;" align="center" color="yellow" text-color="black">
        <q-card-title>
          Presença do Professor
        </q-card-title>
        <q-radio v-model="selection" val="one" label="Sim" />
        <br><br>
        <q-radio v-model="selection" val="two" label="Não" />
        <br><br>
        <q-btn align="center" color="primary" label="Enviar" style="margin-top: 20px;" />
    </q-card>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data: function () {
    return {
      columns: [
        { name: 'horario', label: 'Horário', field: 'col1', style: 'text-align: center;' },
        { name: 'hoje', label: 'Hoje', field: 'col2', style: 'text-align: center;' }
      ],
      horario: [
        {
          col1: 'Tarde/A'
        },
        {
          col1: 'Tarde/B'
        },
        {
          col1: 'Noite/A'
        },
        {
          col1: 'Noite/B'
        }
      ],
      selection: ['one', 'two', 'three']
    }
  }
}
</script>
