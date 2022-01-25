<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  /* COMPOSITION API */
  setup() {
    const search = ref('')
    const names = ref([ 
      'mario', 
      'yoshi', 
      'luigi', 
      'toad', 
      'bowser', 
      'koopa', 
      'peach' 
    ])

    /*
     * 'watch' binds a function which will run every time that 'search' has its value changed.
     */
    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    /*
     * Binds a function which will run every time that any of the vars 
     * inside the function has its value changed.
     * When the setup is loaded, the function automatically runs once.
     */
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    // Computed property
    const matchingNames = computed(() => names.value.filter(
        (name) => name.includes(search.value)
      )
    )

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return {
      names,
      search,
      matchingNames,
      handleClick
    }
  }
}
</script>
