import "./post.css"
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post"><Link className="link" to="/single"><img className="postImg" src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/zotac/thumb/132665-1_large.jpg" alt="ğğ" /></Link>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Bilgisayar</span>
                <span className="postCat">Hayat</span>
                <span className="postCat">Tavsiye</span>
            </div>
            

            <Link className="link" to="/single"><span className="postTitle">GeForce GTX 1650 Ekran Kartlı Sistem Toplama Rehberi</span></Link>
             
             <span className="postDate">1 saat önce</span>
        </div>
        <p className="postDesc">Sistemimizde PNY marka bir ekran kartı bulunuyor. GTX 1650, çift fanlı yapıda geliyor.
         Bu ekran kartının 4 GB’lık versiyonunu kullanıyoruz. PNY markasını ilk defa duyanlar için, PNY daha önceden 
         Quadro serisi ve FirePro serisi ekran kartları yapıyordu. Bunlar, profesyonel anlamda grafik-animasyon işlerinde
          kullanılıyordu. Yani, PNY görüldüğü üzere amatör bir firma değil. Yıllardır bu tarafta çalışmalarını sürdürüyor
           ve Quadro serisinde de bir numaralı serilerden bir tanesi.</p>

    </div>
  );
}
