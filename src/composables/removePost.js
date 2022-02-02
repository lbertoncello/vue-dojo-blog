import { projectFirestore } from '../firebase/config'

const removePost = () => {
  const remove = async (id) => {
    projectFirestore.collection('posts')
      .doc(id)
      .delete()
  }

  return { remove }
}

export default removePost