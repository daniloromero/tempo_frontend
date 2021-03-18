import React from 'react'
import useFetch from "../Hooks/Hooks"
import Loading from "../Helpers/Loading"
import Error from "../Helpers/Error"
import Header from '../Headers/header';
import '../../assets/styles/components/Profile.css'
import { ShowsRender } from "./showcards"
import tempo04 from "../../assets/static/tempo04.png"

const API = process.env.REACT_APP_API;

export const Shows = () => {
    const { data, loading, error } = useFetch(`${API}/shows`)
    if (loading) {
        return <Loading />
    }
    if (error)
        return <Error />
    if (data) {
        return (
            <>
                <Header></Header>
                <div className="wraper">
                    <ShowsRender data={data} key={Math.floor(Math.random() * 1000000)}></ShowsRender>
                </div>
                <div className="footer-content">
                    <div className="content-all-f">
                        <div className="footer-img">
                            <img src={tempo04} alt="icon_image" />
                        </div>
                        <div className="footer-tagline">
                            <h3>Encuentra Tus Shows a Tempo</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
