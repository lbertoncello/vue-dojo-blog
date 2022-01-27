import { ref } from 'vue'

const createPost = () => {
  const uri = 'http://localhost:3000/posts'
  const error = ref(null)

  const create = async (post) => {
    try {
      const data = await fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      })

      if (!data.ok) {
        throw Error('Error trying to create a new post')
      }
    } catch (err) {
      error.value = err
      console.error(error.value)
    }
  }
  
  return { error, create }
}

export default createPost