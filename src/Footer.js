import React from "react"

const Footer = () => {
  const date = new Date();
  return (
    <footer>
         {/* <p>{`Copy Right @ ${date.getFullYear()}`}</p> */}
         <p>Copy Right @ {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer