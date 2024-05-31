import { Route, Routes, /* Link, */ /* useNavigate  */} from "react-router-dom";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
/* import Post from "./Post"; */
/* import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./context/api/post"; */
import EditPost from "./EditPost";

import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <main className="App">
      <DataProvider>
        <Header title="instagram" />
        <Nav />
        {/* <Home posts={searchResult} setPosts={setPosts} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>

        {/* <PostPage /> */}

        <Footer />
      </DataProvider>
    </main>
  );
}

export default App;
