<template>
  <div>
    {{ floorId }} Floor
    <Map :filepath="'statics/easypeasy.svg'"/>
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
