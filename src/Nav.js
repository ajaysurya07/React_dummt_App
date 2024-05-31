import React, { useContext } from "react"
import DataContext from "./context/dataContext"
import { Link } from "react-router-dom"

const Nav = () => {
  const props = useContext(DataContext); /* just import a  const from dataContext */
  return (
    <nav className="Nav">
     <form className = "searchForm" action="searchBar" onSubmit={(e) =>{e.preventDefault()}}>
          <label htmlFor="searchpost">searchPost</label>
          <input 
            id="search"
            type="text"
            placeholder="Search post"
            autoFocus
            required
            value={props.search}
            onChange={(e) =>(props.setSeacrch(e.target.value))} 
          />
     </form>
    <ul>
           <li><Link to={"/"}>Home</Link></li>
           <li><Link to={"/post"}>Post</Link></li>
           <li><Link to={"/about"}>About</Link></li>
    </ul>
    </nav>
  )
}

export default Nav