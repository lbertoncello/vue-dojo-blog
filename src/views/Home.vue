<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  /* COMPOSITION API */
  setup() {
    const p = ref(null)

    // Not reactive values
    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return {
      name,
      age,
      p,
      handleClick
    }
  }
}
</script>
