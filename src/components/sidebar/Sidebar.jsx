import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarItem">
                    <span className="sidebarTitle">HAKKIMDA</span>
                    <img className="sidebarImg" src="images/teknomevologo.png" alt="ğ" />
                    <p>16 Eylül 2001 tarihinde Ankara'da doğdum .Lise öğrenimimi Alparslan Anadolu Lisesi Ankara'da tamamladım . 2020 yılında Gazi Üniversitesi Bilgisayar Mühendisliğini kazandım ve eğitim öğretim hayatıma burada devam ediyorum . Her gün spor yapan ve düzenli futbol oynayan birisiyim. Tamir etmek-onarmak ,sorun çözmek ve bilgisayarla vakit geçirmek benim en büyük hobim .Araştırıp deneyerek yeni şeyler keşfetmeyi , keşfederken öğrenmeyi ve öğrenirken de tecrübe edinmeyi kendime yol edindim.Güncel yazılım dilleriyle proje geliştirmeyi , var olan projeleri daha kullanışlı hale getirmeyi çok seviyorum.Yeni ürünlerin tasarımını ve dizaynını oluşturmaktan keyif alıyorum .Her gün yeni şeyler öğrenerek tam donanımlı bir bilgisayar mühendisi olmak en büyük arzum.
                    </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">KATEGORİLER</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Hayat</li>
                <li className="sidebarListItem">Müzik</li>
                <li className="sidebarListItem">Bilgisayar</li>
                <li className="sidebarListItem">Spor</li>
                <li className="sidebarListItem">Teknoloji</li>
                <li className="sidebarListItem">Araba</li>
                <li className="sidebarListItem">Yenilik</li>
                <li className="sidebarListItem">Tavsiye</li>
            </ul>
   
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">BENİ TAKİP ET!</span>
            <div className="SidebarSocail">
            <Link className="link" to="https://twitter.com/mevocan10" target="_blank"><li className="topIcon fa-brands fa-square-twitter"></li></Link>
        <Link className="link" to="https://www.instagram.com/mevocan10/" target="_blank"><li className="topIcon fa-brands fa-square-instagram"></li></Link>
        <Link className="link" to="https://www.linkedin.com/in/mevl%C3%BCt-babayi%C4%9Fit/" target="_blank"><li className="topIcon fa-brands fa-linkedin"  ></li></Link>
            </div>
            </div>
    </div>
  );
}
