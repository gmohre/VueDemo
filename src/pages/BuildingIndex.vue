<template>
  <q-page class="flex flex-center">
    <Building v-bind:floors="this.floors" name="Papa's House" />
  </q-page>
</template>

<style>
</style>

<script>
import Building from 'components/Building.vue'
export default {
  name: 'BuildingIndex',
  components: {
    Building
  },
  data: () => {
    return {
      floors: [
        {
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
        },
        {
          number: 5,
          svg: 'floor5.svg'
        },
        {
          number: 6,
          svg: 'floor6.svg'
        },
        {
          number: 7,
          svg: 'floor7.svg'
        }
      ]
    }
  }
}
</script>
