<template>
  <div>
    SOME
    <SimpleSVG
      :filepath="filepath"
      v-on:click.native="loadRoom"
    />
  </div>
</template>

<script>
import { SimpleSVG } from 'vue-simple-svg'
export default {
  name: 'Map',
  props: {
    filepath: String
  },
  methods: {
    loadRoom: function (evt) {
      this.$router.push({ name: 'roomDetail', params: { roomId: evt.target.id } })
    }
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
