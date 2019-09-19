<template>
  <div>
    SOME ROOM
    <SimpleSVG
      :filepath="filename"
    />
  </div>
</template>

<script>
import { SimpleSVG } from 'vue-simple-svg'
export default {
  name: 'Room',
  props: {
    filename: String
  },
  components: {
    SimpleSVG
  },
  data: () => {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
