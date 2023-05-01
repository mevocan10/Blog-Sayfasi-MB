import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Hesabımı Güncelle</span>
          <span className="settingsDeleteTitle">Hesabımı Sil</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://media.licdn.com/dms/image/C4D03AQFIyDTTFZP80g/profile-displayphoto-shrink_800_800/0/1635528392455?e=1687392000&v=beta&t=znDIfQGHcGX0akmQTtEVGCMk5bBgCoFkHbP0wB0EuSk"

            alt="" 
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="kullanıcı adı" />
          <label> E-mail</label>
          <input type="email" placeholder="example@example.com" />
          <label> Password</label>
          <input type="password" placeholder="şifre"/>
          <button className="settingsSubmit">Güncelle</button>
        </form>
      </div>
      
      <Sidebar/>
      </div>
  )
}
