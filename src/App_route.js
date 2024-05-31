import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Post";
import PostLayout from "./PostLayout";


function App() {
  return (
    <main className="App">
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            Home 
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
          About
          </Link>
        </li>
        <li>
          <Link to={"/postPage"}>
            PostPage 
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home title={"instgram"}/>} />
      <Route path="*" element= {<Missing />}/>
      <Route path="/about" element={<About />} />
      {/* <Route path="/postPage"  element = {<PostPage />} />
      <Route path="/postPage/:id" element ={<Post />}/>
      <Route path ="postPage/newPost" element = {<NewPost />} /> */}
      <Route path="/postPage" element ={<PostLayout />} >
      <Route index element = {<PostPage />} />
      <Route path=":id" element ={<Post />}/>
      <Route path ="newPost" element = {<NewPost />} />
      </Route >
    </Routes>
    
  </main>
  );
}

export default App;
