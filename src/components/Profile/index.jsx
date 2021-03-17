import React, { useState } from 'react'
// import DataOrganizer from './DataOrganizer'
import Profile from './Profile'
import '../../assets/styles/components/Profile.css'
import NameOrganizer from './NameOrganizer'
import {
        ProfileContainer, InfoP, CardProfile, ImgContainer, UperContainer, ComponentImg,
        ComponentName,  ComponentBody, ComponentSection1, ComponentSection2,
        ContentH1, ContentNameH1, ContentName2H1, ContentProfile
    } from './ProfileElements'

import metronomoTempo2 from '../../assets/static/metronomoTempo2.jpg'
import tempo04 from '../../assets/static/tempo04.png'
import HeaderProfile from './HeaderProfile'


const API = process.env.REACT_APP_API

export default function Tonto({ data }) {

    const req = Object.entries(data);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameID, setNameID] = useState(req[0].map((element) => JSON.stringify(element[0].names_organizer)))
    const [nameEmail, setNameEmail] = useState(req[0].map((element) => JSON.stringify(element[0].email)))
    const [nameFecha, setNameFecha] = useState(req[0].map((element) => JSON.stringify(element[0].created_at)))

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
                    // props.history.push('/login')
                    console.log(response);
            }
        ).catch(
            (error) => console.log(error)
        )
    }

    return (
        <>
         <HeaderProfile></HeaderProfile>
        <div className="container-body">
            <div className="banner">
                <div className="profile">
                    <img className="logotype" src={metronomoTempo2}/>
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
                                                onChange={e => setName(e.target.value)}
                                                value={name}
                                                className="form-control"
                                                placeholder={nameID}
                                                autoFocus
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                onChange={e => setEmail(e.target.value)}
                                                value={email}
                                                className="form-control"
                                                placeholder={nameEmail}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                                className="form-control"
                                                placeholder={nameFecha}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                                className="form-control"
                                                placeholder="Contraseña"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                onChange={e => setConfirmPassword(e.target.value)}
                                                value={confirmPassword}
                                                className="form-control"
                                                placeholder="Confirmar Contraseña"
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
                    <img src={tempo04}/>
                </div>
                <div className="footer-tagline">
                    <h3>Encuentra Tus Shows a Tempo</h3>
                </div>
            </div>
        </div>
        </>
    )
}
