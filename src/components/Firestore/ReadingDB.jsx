import { useEffect, useState } from 'react';
import {db} from '../Firebase/Firebase.js'
import { collection, getDocs } from "firebase/firestore";
import {Feed} from '../NewsFeed/Feed'

const ReadingDB = () => {

      const [postsArray, setPostsArray] = useState([])

      useEffect(() => {
           const fetchData  = async() => {
              try {
                    if(!db) return
                   // bring data once: getDocs(collection(db, "posts"));
                    const docs =  await getDocs(collection(db, "posts"));
                    let allPosts = []
                    docs.forEach((doc) => {
                          const post = doc.data()
                          console.log(post)
                          post.id = doc.id
                          allPosts.push(post)
                          console.log(allPosts)
                    })
                  setPostsArray(allPosts)
             }
              catch (error) {
                  console.log("Ocurrió un error " + error)
              }
            }
            fetchData();
          }, []);
        

     return(
           <div>
                 <h1>Posts Reading</h1>
                 <Feed posts={postsArray}/>
                
           </div>
      )}
      
     

export {ReadingDB};

/*  {postsArray.map((post) => {
                       return(
                       <div key={post.id}>
                             <Feed title={post.title} content={post.content} author={post.author} date={post.date}/>
                       </div>
                 )})} */