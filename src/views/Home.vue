<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  /* COMPOSITION API */
  setup() {
    const uri = 'http://localhost:3000/posts'
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch(uri)
        if (!data.ok) {
          throw Error('No data available')
        }
        posts.value = await data.json()
      } catch(err) {
        error.value = err.message
        console.error(error.value)
      }
    }

    load()
    
    return { posts, error }
  }
}
</script>
