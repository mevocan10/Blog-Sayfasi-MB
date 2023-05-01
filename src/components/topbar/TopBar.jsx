import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = true ;
  return (

    <div className="top">
        <div className="topLeft">

        <Link className="link" to="https://twitter.com/mevocan10" target="_blank"><li className="topIcon fa-brands fa-square-twitter"></li></Link>
        <Link className="link" to="https://www.instagram.com/mevocan10/" target="_blank"><li className="topIcon fa-brands fa-square-instagram"></li></Link>
        <Link className="link" to="https://www.linkedin.com/in/mevl%C3%BCt-babayi%C4%9Fit/" target="_blank"><li className="topIcon fa-brands fa-linkedin"  ></li></Link>


        </div>
        <div className="topCenter">
           <ul className="topList">
            
            <li className="topListItem"><Link className="link" to="/">ANASAYFA</Link></li>
            <li className="topListItem"><Link className="link" to="/about">HAKKIMDA</Link></li>
            <li className="topListItem"><Link className="link" to="/">İLETİŞİM</Link></li>
            <li className="topListItem"><Link className="link" to="/write">YAZ</Link></li>
            {user ?(
            <li className="topListItem"><Link className="link" to="/login">ÇIKIŞ YAP</Link></li>
            ):
             (<ul/>)}
            </ul> 
        </div>
        <div className="topRight">
          
          {
            user ?(
              <img className="topImage"
              src="https://media.licdn.com/dms/image/C4D03AQFIyDTTFZP80g/profile-displayphoto-shrink_800_800/0/1635528392455?e=1687392000&v=beta&t=znDIfQGHcGX0akmQTtEVGCMk5bBgCoFkHbP0wB0EuSk"
              alt="" /> 
              ) : (
              <ul className="topList">
                <li className="topListItem"> <Link className="link" to="/login"> GİRİŞ YAP </Link> </li>
                <li className="topListItem"> <Link className="link" to="/register"> KAYIT OL</Link></li>
              </ul>

            ) }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
  )
}