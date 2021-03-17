import React, { useState } from 'react'
import Profile from './Profile'
import '../../assets/styles/components/Profile.css'
import NameOrganizer from './NameOrganizer'
import metronomoTempo2 from '../../assets/static/metronomoTempo2.jpg'
import tempo04 from '../../assets/static/tempo04.png'
import HeaderProfile from './HeaderProfile'


const API = process.env.REACT_APP_API

export default function Tonto({ data }) {

    const req = Object.entries(data);
    console.log(req[0])

    const [name] = useState('');
    const [email] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameID, setnameID] = useState(req[0].map((element) => (element[0].names_organizer)))
    const [nameEmail, setemail] = useState(req[0].map((element) => (element[0].email)))

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'names_organizer': name,
                'email': email,
                'pwd': password,
                'confirmPwd': confirmPassword
            })
        }).then(
            function (response) {
                if (response.status === 200)
                    console.log(response);
            }
        ).catch(
            (error) => console.log(error)
        )
    }
    console.log("soy el email", email)
    return (
        <>
            <HeaderProfile></HeaderProfile>
            <div className="container-body">
                <div className="banner">
                    <div className="profile">
                        <img className="logotype" src={metronomoTempo2} alt="tempo" />
                    </div>
                    <div className="name-organizer">
                        <h1>Bienvenido <NameOrganizer data={req[0]}></NameOrganizer></h1>
                    </div>
                </div>
                <div className="info-organizer">
                    <div className="container-info-organaizer">
                        <div className="section-data">
                            <div className="content-all-data">
                                <div className="title1">
                                    <h2>Actualizar Mis Datos</h2>
                                </div>
                                <div className="row p-4">
                                    <div className="col-md-12">
                                        <form onSubmit={handleSubmit} className="card card-body">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    onChange={e => setnameID(e.target.value)}
                                                    value={nameID}
                                                    className="form-control"
                                                    placeholder={nameID}
                                                    autoFocus
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    onChange={e => setemail(e.target.value)}
                                                    value={nameEmail}
                                                    placeholder={nameEmail}
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    onChange={e => setPassword(e.target.value)}
                                                    value={password}
                                                    className="form-control"
                                                    placeholder="Contraseña Actual"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    onChange={e => setConfirmPassword(e.target.value)}
                                                    value={confirmPassword}
                                                    className="form-control"
                                                    placeholder="Nueva Contraseña"
                                                />
                                            </div>
                                            <button className="btn btn-primary btn-block">
                                                Actualizar
                                        </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-cards">
                            <div className="title2">
                                <h2>Mis Eventos</h2>
                            </div>
                            <Profile data={data}></Profile>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <div className="content-all-f">
                    <div className="footer-img">
                        <img src={tempo04} alt="tempo" />
                    </div>
                    <div className="footer-tagline">
                        <h3>Encuentra Tus Shows a Tempo</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
