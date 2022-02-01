import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
  const uri = `http://localhost:3000/posts/${id}`
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('posts').doc(id).get()

      if (!res.exists) {
        throw Error('That post does not exist')
      }

      post.value = { id: res.id, ...res.data() }
    } catch(err) {
      error.value = err.message
      console.error(error.value)
    }
  }

  return { post, error, load }
}

export default getPost