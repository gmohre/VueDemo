<template>
  <div>
    <Map :filepath="'statics/drawing.svg'" />
    {{ floorId }} Floor
  </div>
</template>
<script>
import Map from './Map.vue'
export default {
  props: {
    floorId: Number
  },
  name: 'Floor',
  components: {
    Map
  },
  data: () => {
    return {}
  }
}
</script>
