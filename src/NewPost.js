import React, { useContext } from "react"
import DataContext from "./context/dataContext"

const NewPost = () => {
  const props = useContext(DataContext);
  return (
    <main className="NewPost">
      <h2>new post</h2>
      <form
        action="inputData"
        className="newPostForm"
        onSubmit={props.handleSubmit}
      >
        <label htmlFor="postTitle">postTitle:</label>
        <input
          type="text"
          id="postTitle"
          /* autoFocus */ /* avoid autoFocus when more than 1 input is present */
          required
          value={props.postTitle}
          onChange={(e) => props.setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">postBody:</label>
        <textarea
          id="postBody"
          required
          value={props.postBody}
          onChange={(e) => props.setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </main>
  );
};

export default NewPost;
