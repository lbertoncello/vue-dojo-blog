<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  name: 'PostList',
  props: [ 'posts' ],
  components: { SinglePost },
  // This is how we access props inside the setup function
  setup(props) {
    console.log(props.posts)
  }
}
</script>

<style>

</style>