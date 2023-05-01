import "./post.css"
import { Link } from "react-router-dom";

export default function Post3() {
  return (
    <div className="post"><Link className="link" to="/single3"><img className="postImg" src="https://platincdn.com/466/dosyalar/images/icerik/intel-islemci-secimi.jpg" alt="ğğ" /></Link>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Tavsiye</span>
                <span className="postCat">Bilgisayar</span>
            </div>
            

            <Link className="link" to="/single3"><span className="postTitle"> Nisan 2023 En İyi İşlemci Tavsiyeleri</span></Link>
             
             <span className="postDate">2 saat önce</span>
        </div>
        <p className="postDesc">Bilgisayar parçalarını tanımaya devam ederken bir yandan da bu parçalara dair dikkat edilmesi gerekenleri sizlerle paylaşıyoruz. Ayrıca buna ek olarak hangi parça üzerinden ilerliyorsak o parçaya dair en iyilerin olduğu bir listeyi de sizlerle paylaşıyoruz. Bugün de sizlere en iyi işlemci tavsiyelerini hazırladık. Bu içerik öncesinde hazırlamış olduğumuz “Bilgisayarda İşlemci Nedir?” içeriğimizle beraber “İşlemci Alırken Dikkat Edilmesi Gerekenler Nelerdir?” isimli içeriğimizi de okumanızı tavsiye ediyoruz.

En iyi işlemci tavsiyeleri listesini işinizi kolaylaştırmak adına ikiye böldük. İlk olarak Intel tabanlı işlemcilere yer vereceğiz. Ardından da AMD tabanlı işlemcileri inceleyeceğiz. Siz kendi sisteminizde hangi işlemci tabanını kullanmak istiyorsanız direkt olarak o bölüme göz atabilirsiniz. Şimdi lafı daha fazla uzatmadan En İyi İşlemci Tavsiyeleri listemize geçelim.</p>

    </div>
  );
}
