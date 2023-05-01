import "./post.css"
import { Link } from "react-router-dom";

export default function Post4() {
  return (
    <div className="post"><Link className="link" to="/single4"><img className="postImg" src="https://www.webtekno.com/images/editor/default/0003/96/f684d4e2f8ed3be5d233cd427f5f5d344c1ada4d.jpeg" alt="ğğ" /></Link>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Haber</span>
                <span className="postCat">Teknoloji</span>
            </div>
            

            <Link className="link" to="/single4"><span className="postTitle">Kripto Para ile Token'ların Farkları Nelerdir?</span></Link>
             
             <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Bugün kripto varlıklara yatırım yapanlar, gördükleri her şeyin bir "kripto para" olduğunu sanıyorlar. Ancak bu büyük bir yanlış. Bu içeriğimizde, kripto para ile token'lar arasındaki farklardan bahsedeceğiz.
Son yılların en çok tartışılan yatırım araçları arasında yer alan kripto varlıklar, Bitcoin'in yakaladığı yükseliş trendi ile yine herkesin dilinde. Özellikle de enflasyon karşısında para kaybetmemek isteyen vatandaşlar, çoğu zaman eşten dosttan duydukları kripto varlıklara yatırım yapıyorlar. Ancak pek çoğu, aslında neye yatırım yaptığını bile tam olarak bilmiyor.

Şöyle izah edelim, yatırım yaptığımız şeylerin adını bile doğru düzgün bilmiyoruz. Şöyle ki bugün pek çok kişi için binlerce türde olan kripto varlıklar, genelde "kripto para" şeklinde anılıyor. Ancak bu durum, kripto para camiası için çok büyük bir yanlış. Çünkü her alıp sattığınız şey aslında kripto para değil.
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           </p>

    </div>
  );
}
