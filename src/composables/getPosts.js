import { ref } from 'vue'

const getPosts = () => {
  const uri = 'http://localhost:3000/posts'
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(uri)
      if (!data.ok) {
        throw Error('No data available')
      }
      posts.value = await data.json()
    } catch(err) {
      error.value = err.message
      console.error(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts