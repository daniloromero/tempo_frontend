import React from 'react'
import useFetch from "../Hooks/Hooks"
import Tonto from "./index"
import Loading from "../Helpers/Loading"
import Error from "../Helpers/Error"

// connection to flask API on port 5000 add to .env file
const API = process.env.REACT_APP_API;


// makes API call to get user profile on success loads user profile
// otherwise return error
export const Profile = () => {
    const { data, loading, error } = useFetch(`${API}/profile`)
    if (loading) {
        return <Loading></Loading>
    }
    if (error)
        return <Error></Error>
    if (data) {
        return (
            <div className="wraper">
                <Tonto data={data}></Tonto>
            </div>
        )
    }

}