<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
  name: 'PostList',
  props: [ 'posts' ],
  components: { SinglePost },
  // This is how we access props inside the setup function
  setup(props) {
    // Lifecycle hooks
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component unmounted'))
    onUpdated(() => console.log('component updated'))
  },
  mounted() {
    console.log('mounted using options api')
  }
}
</script>

<style>

</style>