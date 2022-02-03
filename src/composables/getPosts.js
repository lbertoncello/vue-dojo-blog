import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .get()
      posts.value = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    } catch(err) {
      error.value = err.message
      console.error(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts