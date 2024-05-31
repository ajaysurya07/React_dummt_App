import { useParams , Link} from "react-router-dom";
import React, { useContext } from "react"
import DataContext from "./context/dataContext"

const PostPage = () => {
   const props = useContext(DataContext);
  const { id } = useParams();
  const post = props.posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.dateTime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => props.handleDelete(post.id)}>Delete Post</button>
            <Link to={`/edit/${id}`}>
            <button>Edit</button>
            </Link>
          </>
        )}
        {!post && (
          <>
            <h2>Page not found</h2>
            <p>Well , that's disappointing</p>
            <p>Visit our Homepage</p>
          </>
        )}
      </article>
    </main>
  ); 
};

export default PostPage;
