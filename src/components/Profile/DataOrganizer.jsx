import React from 'react'

export default function DataOrganizer({data}) {

    return (
        <div>
            {
                data.map((element) => <h1>{JSON.stringify(element[0])}</h1>)
            }
        </div>
    )
}
