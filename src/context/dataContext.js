import { createContext, useState, useEffect, useNavigate ,Children } from "react";
import { format } from "date-fns";
import  api from "../api/post";
const DataContext = createContext({});

export const DataProvider = (Children) => {
    /* copy all the varilables , usesate,  useeffect , funtion from app.js to dataContext */
     /* set a some dummy ppost */
   const [posts, setPosts] = useState([]);
   /* state and submit function for new post */
   const [postTitle, setPostTitle] = useState("");
   const [postBody, setPostBody] = useState("");
 
   const handleSubmit = async(e) => {
     e.preventDefault();
     // console.log(e);
     const newId = posts.length ? posts[posts.length - 1] + 1 : 1;
     const newPostDate = format(new Date(), "MMMM dd ,yyyy , pp");
     const newPost = { newId, title: postTitle, newPostDate, body: postBody };
     try {
       const response = await api.post('./post' , newPost);  /* we are gointo add one line to the old code */
       /* const newPosts = [...posts, newPost]; */
       const newPosts = [...posts , response.data ] /* note that response.data  */
       setPosts(newPosts);
   
       setPostBody("");
       setPostTitle("");
       navigate('/');
     } catch (err) {
          console.log(err.message)
     }
   };
 
   /* SEARCH_BAR */
   const [search, setSeacrch] = useState(" ");
   const [searchResult, setSeacrchResult] = useState([]);
 
   useEffect(() => {
     const filerPost = posts.filter(
       (post) =>
         post.title.toLowerCase().includes(search.toLowerCase()) ||
         post.body.toLowerCase().includes(search.toLowerCase())
     );
 
     setSeacrchResult(
       filerPost.reverse()
     ); /* to show the latest post we reverse it  */
   }, [search, posts]); /* whenever there is a chage it will chage the page */
     /* for displaying a  simgle post */
     const navigate = useNavigate();  /* for return toi the home page after deletion */
     const handleDelete =async(id) =>{
            try {
             const afterDetetion = posts.filter(
               (post) => (
                     post.id !== id
               )
           )
           await api.delete(`/post/${id}`);
           setPosts(afterDetetion);
           navigate("/");
            } catch (err) {
             console.log(`Error : ${err.message}`);
            }
     }
     /* for uploading in the server */
     useEffect(()=>{
        const fetchData =async() =>{
              try {
               const response = await api.get('./post');
               const responseData = response.data;
               setPosts(responseData);
              } catch (err) {
                  if(err.response){
                       /* there in the 200 responce range */
                       console.log(err.response.data);
                       console.log(err.response.status);
                       console.log(err.response.headers);
                  }
                  else{
                      console.log(`Error : ${err.message}`);
                  }
              }
          }
          fetchData(); /* no need to0 call the async call */
     }
     ,[]);
     /* for editing */
     const [editTitle , setEditTitle] = useState('');
     const [editBody , setEditBody ] = useState('');
 
     const handleEdit = async(id) =>{
            const newDate = format(new Date() , "MMMM dd , yyyy ,pp");
            const editPost = {id ,  title: editTitle , newDate , body: editBody};
            try {
                const responce = await api.put(`/post/${id}` , editPost);
                setPosts(
                   posts.map(
                        (post) => post.id === id ? {...responce.data} : post 
                   )
                                ) 
                setEditTitle('');
                setEditBody('');
                navigate('/');
            } catch (err) {
             console.log(`Error : ${err.message}`);
            }
     }
    return (
      <DataContext.Provider
        value={{
          /* data need to share  so put all the varilables , usesate,  useeffect , funtion  to share*/
          posts,
          search,
          setSeacrch,
          postTitle,
          setPostTitle,
          setPostBody,
          postBody,
          handleSubmit,
          editBody,
          setEditBody,
          editTitle,
          setEditTitle,
          handleEdit,
          searchResult,
          setPosts,
          handleDelete
        }}
      >
        {Children} {/* share to  which components */}
      </DataContext.Provider>
    );
};

export default DataContext;
