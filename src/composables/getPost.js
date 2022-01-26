import { ref } from 'vue'

const getPost = (id) => {
  const uri = `http://localhost:3000/posts/${id}`
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(uri)
      if (!data.ok) {
        throw Error('That post does not exist')
      }
      post.value = await data.json()
    } catch(err) {
      error.value = err.message
      console.error(error.value)
    }
  }

  return { post, error, load }
}

export default getPost