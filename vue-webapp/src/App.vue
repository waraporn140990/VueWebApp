<script setup>
import MyBar from '@/views/MyBar.vue'
</script>
<template>
   <div id="App">
   <MyBar />
   <router-view />
   </div>
</template>
<script>
export default {
  name :"App" ,
  components : {
    MyBar,
  },
};
</script>
<style scoped>

</style>