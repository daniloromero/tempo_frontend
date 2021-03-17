import React from 'react'

export default function NameOrganizer({data}) {
    return (
        <div>
            {
                data.map((element) => <> {JSON.stringify(element[0].names_organizer)}</>)
            }
        </div>
    )
}
