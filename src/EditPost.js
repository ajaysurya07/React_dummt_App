import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

const EditPost = (props) => {
  const {id} = useParams();
  const post = props.posts.find(
      (post) => id === post.id
  );
   
  useEffect(()=>{
      if(post){
           props.setEditBody(post.body);
           props.setEditTitle(props.title);
      }
  } 
  , [post , props.setEditTitle , props.setEditBody])
  return (
    <main className="NewPost">
         <h2>Edit post</h2>
         <form
           action="inputData"
           className="newPostForm"
           /* onSubmit={props.handleSubmit} */
           onSubmit={(e) =>e.preventDefault()}
         >
           <label htmlFor="postTitle">postTitle:</label>
           <input
             type="text"
             id="postTitle"
             /* autoFocus */ /* avoid autoFocus when more than 1 input is present */
             required
             value={props.editTitle}
             onChange={(e) => props.setEditTitle(e.target.value)}
           />
           <label htmlFor="postBody">postBody:</label>
           <textarea
             id="postBody"
             required
             value={props.editBody}
             onChange={(e) => props.setEditBody(e.target.value)}
           ></textarea>
           <button type="submit" onClick={() => {props.handleEdit(id)}}>submit</button>
         </form>
    </main>
  )
}

export default EditPost

/* 
      {props.editTitle && 
              <>
                  
              </>
       }
       { !props.editTitle &&
          <>    
              <p>sorry for inconvince</p>
           </>
       }
*/