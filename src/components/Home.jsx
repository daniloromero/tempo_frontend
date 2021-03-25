import React from 'react'
import useFetch from "./Hooks/Hooks"
import Loading from "./Helpers/Loading"
import Error from "./Helpers/Error"
import Header from "./Headers/header";
import Footer from "./Footer/index.js"
import { ShowsRender2 } from "./ShowsHome"
import '../assets/styles/components/Home.css'
import tempo04 from '../assets/static/tempo04.png'
import { Filter } from './Filter';


const API = process.env.REACT_APP_API

export default function Home() {
    const { data, loading, error } = useFetch(`${API}/`)
    if (loading) {
        <Loading></Loading>
    }
    if (error) {
        <Error></Error>
    }
    if (data) {
        return (
            <div className="all-content-img">
                    <div className="dark-img">
                        <Header></Header>
                        <main>
                            <div className="banner-all-home">
                                <div className="tagline">
                                    <div className="logo-tempo-banner">
                                        <img src={tempo04} alt=""/>
                                    </div>
                                    <h1>Encuentra eventos a Tempo.</h1>
                                </div>
                                <Filter></Filter>
                            </div>
                            <section className="parrallax" id="section1">
                            </section>
                            <div className="cont-shows-mouth">
                                <div>
                                    <div className="container-cards-home">
                                        <ShowsRender2 data={data}></ShowsRender2>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer></Footer>
                    </div>
                </div>
        )
    }
}
