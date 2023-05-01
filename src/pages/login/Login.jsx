import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">GİRİŞ YAP</span>
        <form className="loginForm">
            <label>Email</label>
                <input type="text" className="loginInput" placeholder="e-mail adresinizi giriniz.." />
            <label>Şifre</label>
                <input type="password" className="loginInput" placeholder="şifrenizi giriniz.." />
                <button className="loginButton"><Link className="link" to="/">Giriş Yap</Link></button>

        </form>
                <button className="loginRegisterButton">
                  <Link className="link" to="/register">Kayıt Ol</Link>
                  </button>
        </div>
  )
}
