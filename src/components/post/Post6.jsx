import "./post.css"
import { Link } from "react-router-dom";

export default function Post6() {
  return (
    <div className="post"><Link className="link" to="/single6"><img className="postImg" src="https://ares.shiftdelete.net/2023/04/mg-cyberster-tanitildi.webp" alt="ğğ" /></Link>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Araba</span>
                <span className="postCat">Teknoloji</span>
            </div>
            

            <Link className="link" to="/single6"><span className="postTitle">MG’nin sürprizi 2024’te Türkiye’de: MG Cyberster geliyor!</span></Link>
             
             <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Ünlü araba markası MG (Morris Garages), 2024 yılında kutlayacağı 100. kuruluş yıldönümü için özel olarak hazırlık yapıyor. Bu hazırlık kapsamında duyurulan özel sürprizlerden birisi de yeni elektrikli araba modeli MG Cyberster. Tanıtımı yapılan model, 2024 yılından itibaren Türkiye’de yollarda olacak.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </p>

    </div>
  );
}
