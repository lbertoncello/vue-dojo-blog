<template>
  <h1>Real-time Data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

export default {
  setup() {
    const posts = ref([])

    projectFirestore.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const docs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        posts.value = docs
      })

    return { posts }
  }
}
</script>

<style>

</style>