import React from "react";
import "../style.css"
const Darkmode= () =>{
 let clickedClass = "clicked"
 const body = document.body
 const ligthTheme = "light"
 const darkTheme = "dark"
 let theme
 if(localStorage){
     theme = localStorage.getItem("theme")
 }
 if(theme === ligthTheme || theme === darkTheme){
     body.classList.add(theme)
 }else{
     body.classList.add(ligthTheme)
 }
 const switchTheme = (e) => {
     if(theme === darkTheme){
         body.classList.replace(darkTheme,ligthTheme)
         e.target.classList.remove(clickedClass)
         localStorage.setItem("theme","light")
         theme = ligthTheme
     }else{
         body.classList.replace(ligthTheme,darkTheme)
         e.target.classList.add(clickedClass)
         localStorage.setItem("theme","dark")
         theme=darkTheme
     }
 }
 return(
     <button className={theme === "dark" ? clickedClass : "notclicked"} id="darkMode" onClick={(e)=>switchTheme(e)}></button>
 )
}
export default Darkmode