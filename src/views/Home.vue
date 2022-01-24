<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  /* COMPOSITION API */
  setup() {
    console.log('setup')

    // Not reactive values
    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log('You cliked me')
    }

    return {
      name,
      age,
      handleClick
    }
  }
}
</script>
