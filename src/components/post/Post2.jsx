import "./post.css"
import { Link } from "react-router-dom";
export default function Post2() {
    return (
        <div className="post"><Link className="link" to="/single2"><img className="postImg" src="https://ares.shiftdelete.net/2022/09/apple-store.webp" alt="ğğ" /></Link>
    
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Marka</span>
                    <span className="postCat">Yenilik</span>
                </div>
                
    
                <Link className="link" to="/single2"><span className="postTitle">Apple'dan Odanızın Duvarını Mac'e Dönüştürecek Bir Patent </span></Link>
                 
                 <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Apple, iMac modellerine gelebilecek bir özellik için patent aldı. Bu özellik, cihazın arkasındaki duvarı ikinci bir ekran gibi kullanabilmesini sağlıyor.
Apple, cihazlarına birçok yenilik getirebilecek oldukça ilginç özellikler için sık sık patent başvurusunda bulunuyor. Örneğin geçtiğimiz günlerde AirPods modellere dokunmatik ekran gelebileceğini gösteren bir patent ortaya çıkmıştı.</p>
    
        </div>
      );
}

