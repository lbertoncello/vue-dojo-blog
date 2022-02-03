<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts=posts />
    </div>
    <div v-else-if="loading">
      <Spinner />
    </div>
    <div v-else>
      <h3>Não há nenhum post cadastrado no momento.</h3>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  /* COMPOSITION API */
  setup() {
    const loading = ref(true)
    const { posts, error, load } = getPosts()

    load().then(() => loading.value = false)
    
    return { posts, error, loading }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px
  }
</style>