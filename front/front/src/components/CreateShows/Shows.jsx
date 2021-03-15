import React, { useState } from 'react'
import "../../styles/create-show.css"
import Artistas from './Artistas'
import Lugares from './Lugares'


export default function CreateShow() {
    const [state, setstate] = useState([])
    const [nameshow, setshow] = useState("")
    const [precio, setPrecio] = useState("")
    const [fecha, setfecha] = useState("")
    const [hora, sethora] = useState("")
    const [descripcion, setdescripcion] = useState("")

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
        const show = {
            nameShow: nameshow,
            precio: precio,
            fecha_show: fecha,
            hora_show: hora,
            descripcion_show: descripcion
        }
        setstate([...state, show])
        console.log("se ha subido con exito el show", show)
    }
    console.log("SOY EL ESTADO INICIAL PADRE >>>", state)
    return (
        <>
            <div className="all">
                <div className="content">
                    <div className="steps">
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
                    <form>
                        <div>
                            <h2>Datos del evento</h2>
                        </div>
                        <div className="forms">
                            {/* CREAR SHOWS */}
                            <div className="SHOWS">
                                <h1>CREAR SHOW</h1>
                                <div className="div-inputs">
                                    <label><b>*</b> Nombre del evento:</label><br></br>
                                    <input className="inputs" onChange={handleChange} name="name_show" value={nameshow} type="text" placeholder="Nombre de el show" />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Precio Entrada</label><br></br>
                                    <input className="inputs" type="text" name="precio" value={precio} onChange={handleChange} placeholder="Precio" />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Fecha:</label><br></br>
                                    <input className="inputs" type="date" name="fecha" value={fecha} onChange={handleChange} />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Hora:</label><br></br>
                                    <input className="inputs" name="hora" value={hora} type="time" onChange={handleChange} />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Descripión del evento:</label><br></br>
                                    <textarea placeholder="Haz una breve descripción de la tematica de tu show" name="descripcion_evento" value={descripcion} onChange={handleChange} className="inputs"></textarea>
                                </div>
                                <div className="div-inputs">
                                    <input type="file" className="upload-img" name="file" id="file" accept="image/png, image/jpeg image/jpg" />
                                    <label className="label-file" htmlFor="file">Subir foto ⇪</label>
                                </div>
                                <div>
                                    <button onClick={handleSubmit} name="show">next</button>
                                </div>
                            </div>
                            {/* CREAR ARTISTAS */}
                            <Artistas data={state} setstate={setstate}></Artistas>
                            {/* CREAR LUGARES */}
                            <Lugares data={state} setstate={setstate}></Lugares>
                        </div>
                        {/* <div className="btn-next-step">
                            <input type="submit" value="Subir" />
                        </div> */}
                    </form>
                </div>

            </div>
        </>
    )
}
