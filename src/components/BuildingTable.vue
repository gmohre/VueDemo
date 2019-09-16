<template>
    <q-table
        :title="name"
        :data="floors"
        :columns="columns"
        :rows-per-page-options="[0]"
        :fullscreen.sync="isFullscreen"
        :pagination.sync="pagination"
        row-key="number"
        hide-bottom
    />
</template>
<script>
export default {
  props: {
    name: String,
    floors: Array
  },
  name: 'Building',
  data: () => {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'number',
          required: true,
          label: 'Floor Number',
          align: 'left',
          field: row => row.number,
          format: val => `${val}`
        },
        {
          name: 'svg',
          required: true,
          label: 'Detail',
          align: 'left',
          field: row => row.svg,
          format: val => `${val}`
        }
      ]
    }
  }
}
/* {
  number: 1,
  svg: 'floor1.svg'
},
{
  number: 2,
  svg: 'floor2.svg'
},
{
  number: 3,
  svg: 'floor3.svg'
},
{
  number: 4,
  svg: 'floor4.svg'
} */
</script>
