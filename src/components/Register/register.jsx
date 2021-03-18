import React, { useState } from 'react'
import Header from '../Header';
import tempo04 from '../../assets/static/tempo04.png'
import '../../assets/styles/components/Profile.css'
import { Navbar } from "./Navbar";

const API = process.env.REACT_APP_API

export const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


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
                    props.history.push('/login')
            }
        ).catch(
            (error) => console.log(error)
        )
    }

    return (
        <>
            <Header></Header>
            <div className="row p-4">
                <div className="content-login col-md-4">
                    <div className="container-nav">
                        <Navbar />
                    </div>
                    <form onSubmit={handleSubmit} className="card card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                onChange={e => setName(e.target.value)}
                                value={name}
                                className="form-control"
                                placeholder="Nombre"
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                className="form-control"
                                placeholder="Email"
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
                            Registrarse
                    </button>
                    </form>
                </div>
            </div>
            <div className="footer-content">
                <div className="content-all-f">
                    <div className="footer-img">
                        <img src={tempo04} alt="icon-tempo" />
                    </div>
                    <div className="footer-tagline">
                        <h3>Encuentra Tus Shows a Tempo</h3>
                    </div>
                </div>
            </div>
        </>
    );
}