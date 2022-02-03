import { ref } from 'vue'
import { projectFirestore, timestamp } from '../firebase/config'

const createPost = () => {
  const error = ref(null)

  const create = async (post) => {
    try {
      post.createdAt = timestamp()
      await projectFirestore.collection('posts').add(post)
    } catch (err) {
      error.value = err
      console.error(error.value)
    }
  }
  
  return { error, create }
}

export default createPost