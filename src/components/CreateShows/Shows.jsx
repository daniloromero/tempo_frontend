import React, { useState } from 'react'
import HeaderProfile from '../Profile/HeaderProfile'
import "../../styles/create-show.css"
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import tempo04 from '../../assets/static/tempo04.png'
=======
import Footer from '../Footer';

>>>>>>> fb3f8d91306cb59cf85774e8810148247073b5e3


const API = process.env.REACT_APP_API


export default function CreateShow() {
    const [state, setstate] = useState([])
    const [nameshow, setshow] = useState("")
    const [precio, setPrecio] = useState("")
    const [fecha, setfecha] = useState("")
    const [hora, sethora] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [nombreArtista, setnombreArtista] = useState("")
    const [generoArtista, setgeneroArtista] = useState("")
    const [nombre_lugar, setnombre_lugar] = useState("")
    const [direccion, setdireccion] = useState("")
    const [ciudad, setciudad] = useState("")
    const [descripcion_lugar, setdescripcion_lugar] = useState("")

    let history = useHistory()
    // HANLDE CHANGE PARA EL SHOW 
    const handleChange = ({ target }) => {
        switch (target.name) {
            case "name_show":
                setshow(target.value);
                break;
            case "precio":
                setPrecio(target.value);
                break;
            case "fecha":
                setfecha(target.value);
                break;
            case "hora":
                sethora(target.value);
                break;
            case "descripcion_evento":
                setdescripcion(target.value);
                break;
            default:
                return;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name_show: nameshow,
            price_ticket: precio,
            date: fecha,
            hour: hora,
            description_show: descripcion,
            venue_name: nombre_lugar,
            address: direccion,
            city: ciudad,
            description: descripcion_lugar,
            artist_name: nombreArtista,
            genre_artist: generoArtista
        }
        setstate([...state, data])
        fetch(`${API}/create-show`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "data": data, })
        }).then(
            function (response) {
                if (response.status === 200)
                    history.push('/profile')
                console.log(response);
            }
        ).catch(
            (error) => console.log(error)
        )
    }
    return (
        <>
            <HeaderProfile></HeaderProfile>
            {/* <div className="all">
                <div className="principal-buttom">
                    <a href="#content-show1">Crear Evento</a>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit} className="allFoms">
                        <div className="content-shows" id="content-show1">
                            <div className="steps">
                                <div className="content-step">
                                    <div className="step-current">
                                        <h4>Paso 1</h4>
                                    </div>
                                    <div>
                                        <h4>Paso 2</h4>
                                    </div>
                                    <div>
                                        <h4>Paso 3</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div>
                                    <h1>CREAR EVENTO</h1>
                                </div>
                                <div className="content-inp">
                                    <div className="div-inputs">
                                        <label><b>*</b> Nombre del evento:</label><br></br>
                                        <input required className="inputs" onChange={handleChange} name="name_show" value={nameshow} type="text" placeholder="Nombre de el show" />
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b> Precio Entrada</label><br></br>
                                        <input required className="inputs" type="text" name="precio" value={precio} onChange={handleChange} placeholder="Precio" />
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b> Fecha:</label><br></br>
                                        <input required className="inputs" type="date" name="fecha" value={fecha} onChange={handleChange} />
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b> Hora:</label><br></br>
                                        <input required className="inputs" name="hora" value={hora} type="time" onChange={handleChange} />
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b> Descripción del evento:</label><br></br>
                                        <textarea required placeholder="Haz una breve descripción de la tematica de tu show" name="descripcion_evento" value={descripcion} onChange={handleChange} className="inputs"></textarea>
                                    </div>
                                </div>
                                <div className="after-btn-next">
                                    <a href="" className="cancelar">Cancelar</a>
                                    <a href="#content-artist1" className="siguiente">Siguiente</a>
                                </div>
                            </div>
                        </div>
                        <div className="content-artist" id="content-artist1">
                            <div className="steps">
                                <div className="content-step">
                                    <div>
                                        <h4>Paso 1</h4>
                                    </div>
                                    <div className="step-current">
                                        <h4>Paso 2</h4>
                                    </div>
                                    <div>
                                        <h4>Paso 3</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div>
                                    <h1>CREAR ARTISTA</h1>
                                </div>
                                <div className="content-inp">
                                    <div className="div-inputs">
                                        <label><b>*</b> Nombre del artista/Banda:</label><br></br>
                                        <input required className="inputs" name="name_artist" value={nombreArtista} onChange={(e) => setnombreArtista(e.target.value)} type="text" placeholder="Nombre del artista o banda" />
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b> Género:</label><br></br>
                                        <input required className="inputs" type="text" name="genero" value={generoArtista} onChange={(e) => setgeneroArtista(e.target.value)} placeholder="Género del artista" />
                                    </div>
                                </div>
                                <div className="after-btn-next">
                                    <a href="#content-show1" className="cancelar">Anterior</a>
                                    <a href="#content-venue1" className="siguiente">Siguiente</a>
                                </div>
                            </div>
                        </div>
                        <div className="content-venue" id="content-venue1">
                            <div className="steps">
                                <div className="content-step">
                                    <div>
                                        <h4>Paso 1</h4>
                                    </div>
                                    <div>
                                        <h4>Paso 2</h4>
                                    </div>
                                    <div className="step-current">
                                        <h4>Paso 3</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div>
                                    <h1>CREAR LUGAR</h1>
                                </div>
                                <div className="content-inp">
                                    <div className="div-inputs">
                                        <label><b>*</b> Nombre del establecimiento o lugar::</label><br></br>
                                        <input required className="inputs" name="nombre_lugar" value={nombre_lugar} onChange={(e) => setnombre_lugar(e.target.value)} type="text" placeholder="Nombre de tu establecimiento" />
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b>Dirección:</label><br></br>
                                        <input required className="inputs" type="text" name="direccion" value={direccion} onChange={(e) => setdireccion(e.target.value)} placeholder="Dirección del establecimiento" />
                                    </div>
                                    <div className="div-inputs">
                                        <label htmlFor="ciudad"><b>*</b>Elige una Ciudad:</label>
                                        <br></br>
                                        <select className="inputs" name="ciudad" value={ciudad} onChange={(e) => setciudad(e.target.value)} id="ciudad" required>
                                            <option value="">Seleccione una ciudad</option>
                                            <option value="Bogotá">Bogotá</option>
                                            <option value="Medellín">Medellín</option>
                                        </select>
                                    </div>
                                    <div className="div-inputs">
                                        <label><b>*</b>Descripción de tu establecimiento:</label><br></br>
                                        <textarea required name="descripcion_lugar" value={descripcion_lugar} onChange={(e) => setdescripcion_lugar(e.target.value)} className="inputs" placeholder="Escribe una breve descripcion del establecimiento"></textarea>
                                    </div>
                                </div>
                                <div className="after-btn-next">
                                    <a href="#content-artist1" className="cancelar">Anterior</a>
                                    <input type="submit" value="Finalizar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
            <section className="showcase">
                <header>
                    <h2 className="logo-tempo">Tempo</h2>
                </header>
                <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
                    <source src="TEMPO.mp4" type="video/mp4" />
                </video>
                <div className="text">
                    <div className="principal-buttom">
                        <a href="#content-show1">Crear mi show</a>
                    </div>
                    <form>
                        <div className="content-shows" id="content-show1">
                            <div className="info">
                                <div>
                                    <h1>CREAR EVENTO</h1>
                                </div>
                                <div className="content-inp">
                                    <div className="div-inputs">
                                        <label>Nombre del evento</label><br /><br />
                                        <input required className="inputs-video" name="name_show" defaultValue="{nameshow}" type="text" placeholder="Nombre de el show" />
                                    </div>
                                    <div className="div-inputs">
                                        <label> Precio Entrada</label><br /><br />
                                        <input required className="inputs-video" type="text" name="precio" defaultValue="{precio}" onchange="{handleChange}" placeholder="Precio" />
                                    </div>
                                    <div className="div-inputs">
                                        <label> Fecha del Show</label><br /><br />
                                        <input required className="inputs-video" type="date" name="fecha" defaultValue="{fecha}" onchange="{handleChange}" />
                                    </div>
                                    <div className="div-inputs">
                                        <label>Hora</label><br /><br />
                                        <input required className="inputs-video" name="hora" defaultValue="{hora}" type="time" onchange="{handleChange}" />
                                    </div>
                                    <div className="div-inputs">
                                        <label> Descripción del evento</label><br /><br />
                                        <textarea required placeholder="Haz una breve descripción de la tematica de tu show" name="descripcion_evento" value="{descripcion}" onchange="{handleChange}" className="inputs" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="container-buttons-tempo">
                                    <div className="after-btn-next">
                                        <a href className="cancelar">Cancelar</a>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;
                                    <div className="after-btn-next-a-next">
                                        <a href="#content-artist1" className="siguiente">Siguiente</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-artist" id="content-artist1">
                            <div className="info">
                                <div>
                                    <h1>CREAR ARTISTA</h1>
                                </div>
                                <div className="content-inp">
                                    <div className="div-inputs">
                                        <label>Nombre del artista/Banda</label><br /><br />
                                        <input required className="inputs-video" name="name_artist" type="text" placeholder="Nombre del artista o banda" />
                                    </div>
                                    <div className="div-inputs">
                                        <label>Género</label><br /><br />
                                        <input required className="inputs-video" type="text" placehoder="genero banda" name="genero" />
                                    </div>
                                </div>
                                <div className="container-buttons-tempo">
                                    <div className="after-btn-next-a-before">
                                        <a href="#content-show1" className="cancelar">Anterior</a>
                                    </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className="after-btn-next-a-next">
                                        <a href="#content-venue1" className="siguiente">Siguiente</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-venue" id="content-venue1">
                            <div className="info">
                                <div>
                                    <h1>CREAR LUGAR</h1>
                                </div>
                                <div className="content-inp">
                                    <div className="div-inputs">
                                        <br />
                                        <label> Nombre del establecimiento o lugar</label><br /><br />
                                        <input required className="inputs-video" name="nombre_lugar" type="text" placeholder="Nombre de tu establecimiento" />
                                    </div>
                                    <div className="div-inputs">
                                        <br />
                                        <label>Dirección</label><br /><br />
                                        <input required className="inputs-video" type="text" name="direccion" placeholder="Dirección del establecimiento" />
                                    </div>
                                    <div className="div-inputs">
                                        <label htmlfor="ciudad">Elige una Ciudad</label>
                                        <br /><br />
                                        <select className="select-video" name="ciudad" id="ciudad" required>
                                            <option value>Seleccione una ciudad</option>
                                            <option value="Bogotá">Bogotá</option>
                                            <option value="Medellín">Medellín</option>
                                        </select>
                                    </div>
                                    <div className="div-inputs">
                                        <br />
                                        <label>Descripción de tu establecimiento</label><br /><br />
                                        <textarea required name="descripcion_lugar" placeholder="Escribe una breve descripcion del establecimiento" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="after-btn-next">
                                    <a href="#content-artist1" className="cancelar">Anterior</a>
                                    &nbsp;&nbsp;&nbsp;
                                    <input type="submit" defaultValue="Finalizar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <div className="footer-content">
                <div className="content-all-f">
                    <div className="footer-img">
                        <img src={tempo04} />
                    </div>
                    <div className="footer-tagline">
                        <h3>Encuentra Tus Shows a Tempo</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
