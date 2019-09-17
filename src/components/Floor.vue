<template>
  <div>
    floor
    {{ floorId }}
  </div>
</template>
<script>
export default {
  props: {
    floorId: Number
  },
  name: 'Floor',
  data: () => {
    return {}
  }
}
</script>
