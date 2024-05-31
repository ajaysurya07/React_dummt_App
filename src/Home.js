import React, { useContext } from "react"
import DataContext from "./context/dataContext"
import Feed from "./Feed";

const Home = () => {
  const props = useContext(DataContext);
  return (
    <main className="Home">
      {props.searchResult.length ? (
        <Feed posts={props.searchResult} />
      ) : (
        <p>no post to display ,sorry, </p>  /*  there is no post to display */
      )}
    </main>
  );
};

export default Home;
