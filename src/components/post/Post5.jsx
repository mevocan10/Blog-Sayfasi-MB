import "./post.css"
import { Link } from "react-router-dom";

export default function Post5() {
  return (
    <div className="post"><Link className="link" to="/single5"><img className="postImg" src="https://www.webdedestek.com/wp-content/uploads/2020/04/ani-fps-sorunu.jpg" alt="ğğ" /></Link>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Oyun</span>
                <span className="postCat">Çözüm</span>
            </div>
            

            <Link className="link" to="/single5"><span className="postTitle">Oyunlarda Ani FPS Düşmesi Çözümü</span></Link>
             
             <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Online bilgisayar oyunlarında kullanıcıların en çok sıkıntı yaşadığı durumlardan biri FPS drop sorunudur. FPS drop, anlık FPS düşmesi manasına gelir. Bu durum yaşandığında oyun içinde donma, kasma, takılma gibi problemler ortaya çıkar. FPS değerinin ani düşmesine drop denmektedir. Oyunlardaki bu problemler birçok kullanıcı için can sıkıcı bir durumdur.</p>

    </div>
  );
}
