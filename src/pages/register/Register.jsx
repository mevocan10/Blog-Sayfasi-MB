import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">KAYIT OL</span>
        <form className="registerForm">
                  <label>Kullanıcı Adı</label>
                <input type="text" className="registerInput" placeholder="kullanıcı adınızı giriniz.." />      <label>Email</label>
                <input type="e-mail" className="registerInput" placeholder="e-mail adresinizi giriniz.." />

            <label>Şifre</label>
                <input type="password" className="registerInput" placeholder="şifrenizi giriniz.." />
                <button className="registerButton"><Link className="link" to="/">Kayıt Ol</Link></button>

        </form>
                <button className="registerLoginButton"> 
                <Link className="link" to="/login">Giriş Yap</Link>
            
                </button>
        </div>
  )
}
