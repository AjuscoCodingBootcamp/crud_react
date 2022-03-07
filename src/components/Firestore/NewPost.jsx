import {useState} from 'react';
import {db} from '../Firebase/Firebase.js'
import { addDoc, collection} from "firebase/firestore";

const NewPost = () => {

      const [newPost, setNewPost] = useState({
            title: "",
            author: "Vania R",
            content:"",
            date: new Date(),
            img:"",
      })

      const handleChange = (event) => {
            console.log('handle change active', event.target.value)
            setNewPost( { ...newPost, [event.target.name]: event.target.value} )
            console.log(newPost) 
      }

      const handleSubmit = (event) => {
            event.preventDefault();
            createPost(newPost)
            console.log(newPost, "DESDE SUBMIT")
            setNewPost({title: "",author: "", content:"",date: "", img:""})

      }
//escribir en la base de datos
      const createPost = async (post) => {
            try {
                 await addDoc(collection(db, "posts"), post)
                  console.log("DB update success")
            }
            catch (error) {
                  console.log("Error al intentar escribir en Firestore "+ error)
            }
      }

      return (
            <div>
                  <h1>Create Component</h1>
                  <form onSubmit={handleSubmit}>
                        <h3>Title: </h3>
                        <input type="text" placeholder="Title" name="title" value={newPost.title} onChange={handleChange}/>
                        <h4>Contenido: </h4>
                        <textarea placeholder="Escribir contenido del post" name="content" value={newPost.content} onChange={handleChange}></textarea>
                        <button>Submit / Enviar</button>
                  </form>
            </div>
      )
}

export {NewPost}