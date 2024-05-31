import React from "react";
import { /* useParams, */ Link } from "react-router-dom";

const Post = ({ post }) => {
  /*  const {id} = useParams(); */
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p className="postDate">{post.dateTime}</p>
      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
