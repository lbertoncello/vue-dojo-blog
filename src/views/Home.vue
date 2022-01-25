<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  /* COMPOSITION API */
  setup() {
    // const p = ref(null)

    // Refs are reactive values
    const name = ref('Mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return {
      name,
      age,
      handleClick
    }
  }
}
</script>
