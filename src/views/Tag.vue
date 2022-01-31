<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'

export default {
  components: { Spinner, PostList },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()
    
    load()

    const filteredPosts = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag)) 
    )

    return { posts, error, filteredPosts }
  }
}
</script>

<style>

</style>