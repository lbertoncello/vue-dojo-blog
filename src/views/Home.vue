<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="handleTogglePost">toggle post</button>
    <button @click="handleDeletePost">delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  /* COMPOSITION API */
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem amet tenetur autem aspernatur, aliquid saepe eligendi, reiciendis quia ducimus neque iste ea nobis, repellendus esse quisquam hic. Accusantium nobis totam tenetur inventore non optio a earum dolorum! Labore doloremque iusto sapiente illo esse porro in, alias est voluptatibus error iure nostrum mollitia magnam commodi vel quasi! Recusandae, qui consequuntur!', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem amet tenetur autem aspernatur, aliquid saepe eligendi, reiciendis quia ducimus neque iste ea nobis, repellendus esse quisquam hic. Accusantium nobis totam tenetur inventore non optio a earum dolorum! Labore doloremque iusto sapiente illo esse porro in, alias est voluptatibus error iure nostrum mollitia magnam commodi vel quasi! Recusandae, qui consequuntur!', id: 2 }
    ])
    const showPosts = ref(true)

    const handleTogglePost = () => showPosts.value = !showPosts.value
    const handleDeletePost = () => posts.value.pop()
    
    return { 
      posts, 
      showPosts, 
      handleTogglePost,
      handleDeletePost
    }
  }
}
</script>
