import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

const API = process.env.REACT_APP_API

export default function Lugares({ data, setstate }) {
    const [nombre_lugar, setnombre_lugar] = useState("")
    const [direccion, setdireccion] = useState("")
    const [ciudad, setciudad] = useState("")
    const [descripcion_lugar, setdescripcion_lugar] = useState("")

    let history = useHistory();
    const handleSubmit3 = (e) => {
        e.preventDefault()
        const lugar = {
            nombre_lugar: nombre_lugar,
            direccion: direccion,
            ciudad: ciudad,
            descripcion_lugar: descripcion_lugar
        }
        setstate([...data, lugar])
        console.log("SOY EL LUGAR", lugar) // undefined
        fetch(`${API}/create-show`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "data": data, "lugar": lugar })
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
    console.log("SOY EL ULTIMO SUBMIT ESTA E SMI data", data)
    return (
        <div className="LUGARES">
            <h1>CREAR LUGAR</h1>
            <div className="div-inputs">
                <label><b>*</b> Nombre del establecimiento o lugar::</label><br></br>
                <input className="inputs" name="nombre_lugar" value={nombre_lugar} onChange={(e) => setnombre_lugar(e.target.value)} type="text" placeholder="Nombre de tu establecimiento" />
            </div>
            <div className="div-inputs">
                <label><b>*</b>Dirección:</label><br></br>
                <input className="inputs" type="text" name="direccion" value={direccion} onChange={(e) => setdireccion(e.target.value)} placeholder="Dirección del establecimiento" />
            </div>
            <div className="div-inputs">
                <label htmlFor="ciudad"><b>*</b>Elige una Ciudad:</label>
                <select name="ciudad" value={ciudad} onChange={(e) => setciudad(e.target.value)} id="ciudad">
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Cartagena">Cartagena</option>
                </select>
            </div>
            <div className="div-inputs">
                <label><b>*</b>Descripción de tu establecimiento:</label><br></br>
                <textarea name="descripcion_lugar" value={descripcion_lugar} onChange={(e) => setdescripcion_lugar(e.target.value)} className="inputs" placeholder="Escribe una breve descripcion del establecimiento"></textarea>
            </div>
            <div className="btn-next-step">
                <input onClick={handleSubmit3} type="submit" value="Subir" />
            </div>
            <div className="btn-next-step">
                <Link to="/profile">Volver a Tempo</Link>
            </div>
        </div>

    )
}
