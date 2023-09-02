import {Link } from "react-router-dom";

const Menu = () => {

  return (
    <div className="menu" id="menu">
       <i className="bi bi-list burger icon" id="burger" onClick={(e)=>{document.getElementById('menu_drop')?.classList.add('show');  document.getElementById('burger')?.classList.remove('icon');}}></i> 
        <a href=""><i className="bi bi-envelope"></i></a>
        <a href=""><i className="bi bi-whatsapp"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-tiktok"></i></a>
        <Link to={'/login'} style={{color:"gold"}}  className="login">LOGIN</Link>
        
      <div className="menu_dropdown" id="menu_drop">
        <i className="drop-x" id="close" onClick={(e)=>{document.getElementById('menu_drop')?.classList.remove('show'); document.getElementById('burger')?.classList.add('icon'); }}>X</i>
        <a href=""><i className="bi bi-envelope drop"></i></a>
        <a href=""><i className="bi bi-whatsapp drop"></i></a>
        <a href=""><i className="bi bi-instagram drop"></i></a>
        <a href=""><i className="bi bi-facebook drop"></i></a>
        <a href=""><i className="bi bi-tiktok drop"></i></a>
        <Link to={'/login'} style={{color:"gold"}}  className="log">LOGIN</Link>

      </div>

    </div>
  )
}

export default Menu
