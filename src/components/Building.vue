<template>
  <q-list highlight separator>
    <q-item link
      :to="{ name: 'floorDetail', params: { floorId: floor.number }}"
      v-for="floor in floors" :key="floor.number">
      <q-item-section>
        {{ floor.svg }}
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
export default {
  props: {
    name: String,
    floors: Array
  },
  name: 'Building',
  data: () => {
    return {}
  }
}
</script>
