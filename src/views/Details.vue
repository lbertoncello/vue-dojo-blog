<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">Delete Post</button>
  </div>
  <div v-if="loading">
    <Spinner />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import getPost from '../composables/getPost'
import removePost from '../composables/removePost'

export default {
  name: 'Details',
  props: [ 'id' ],
  components: { Spinner },
  setup(props) {
    const loading = ref(true)
    const route = useRoute()
    const router = useRouter()
    const { post, error, load } = getPost(route.params.id)
    const { remove } = removePost()

    load().then(() => loading.value = false)

    const handleClick = async () => {
      await remove(props.id)

      router.push({ name: 'Home' })
    }

    return { post, error, loading, handleClick }
  }
}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
    cursor: pointer;
  }
</style>