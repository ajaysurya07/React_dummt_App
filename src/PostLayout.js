import React from "react";
import { Outlet , Link } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <Link to={"/postPage/1"}> post1 </Link>
      <br />
      <Link to={"/postPage/2"}> post2 </Link>
      <br />
      <Link to={"/postPage/3"}> post3 </Link>
      <br />
      <Link to={"/postPage/newPost"}>new post</Link>
      <Outlet /> {/* always use this to go to the paritcular page  */}
    </>
  );
};

export default PostLayout;
