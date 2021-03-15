import React, { useState } from 'react'

export default function Artistas({ data, setstate }) {
    const [nombreArtista, setnombreArtista] = useState("")
    const [generoArtista, setgeneroArtista] = useState("")
    const handleSubmit2 = (e) => {
        e.preventDefault()
        const artista = {
            nombreArtista: nombreArtista,
            generoArtista: generoArtista
        }
        setstate([...data, artista]) // padre
    }
    return (
        <div className="ARTISTAS">
            <h1>CREAR ARTISTA</h1>
            <div className="div-inputs">
                <label><b>*</b> Nombre del artista/Banda:</label><br></br>
                <input className="inputs" name="name_artist" value={nombreArtista} onChange={(e) => setnombreArtista(e.target.value)} type="text" placeholder="Nombre del artista o banda" />
            </div>
            <div className="div-inputs">
                <label><b>*</b> Género:</label><br></br>
                <input className="inputs" type="text" name="genero" value={generoArtista} onChange={(e) => setgeneroArtista(e.target.value)} placeholder="Género del artista" />
            </div>
            <div className="div-inputs">
                <input type="file" className="upload-img" name="file" id="file" accept="image/png, image/jpeg image/jpg" />
                <label className="label-file" htmlFor="file">Subir foto ⇪</label>
            </div>
            <div>
                <button onClick={handleSubmit2} name="artista">next</button>
            </div>
        </div>
    )
}
