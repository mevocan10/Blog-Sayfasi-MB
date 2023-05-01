import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek-724x394.webp" alt="ğ" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                placeholder="Makalenizi buraya giriniz.." 
                type="text"
                className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Yayınla</button>
        </form>
    </div>
  )
}
