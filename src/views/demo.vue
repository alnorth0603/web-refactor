<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Demo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Demo from '@/components/demo.vue'

export default {
  name: 'demo',
  components: {
    Demo
  }
}
</script>
