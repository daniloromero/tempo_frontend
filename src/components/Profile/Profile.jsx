import React from 'react'
import { ShowsRender3 } from './CardProfile'


export default function Profile({ data }) {
    console.log(data);
    let shows = data["shows"]
    // console.log(shows)
    let result = shows.map(item => (item[1]))
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }} className="Hello">
                {
                    <>
                        <ShowsRender3 data={shows}></ShowsRender3>
                    </>
                }
            </div>
        </div>
    )
}