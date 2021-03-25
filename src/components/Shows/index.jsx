import React from 'react'
import useFetch from "../Hooks/Hooks"
import Loading from "../Helpers/Loading"
import Error from "../Helpers/Error"
import Header from '../Headers/header';
import '../../assets/styles/components/Profile.css'
import { ShowsRender } from "./showcards"
import '../../assets/styles/components/Shows.css'
import Footer from '../Footer/index'
import { Filter } from '../Filter';

// connection to flask API on port 5000 add to .env file
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
            <div className="wraper-img">
                <div className="dark-wrapper">
                    <div className="mini-content">
                        <Header></Header>
                        <div className="content-head">
                            <div className="content-of-head">
                                <Filter></Filter>
                            </div>
                        </div>
                        <div className="content-body">
                            <div className="content-of-body">
                                <div className="content-card">
                                    <ShowsRender data={data} ></ShowsRender>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
