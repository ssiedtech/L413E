import React from 'react'


function TermList(){
    const names = ['lache', 'john']
    const namelist = names.map=(name => <h2>{name}</h2>)

    return(
        <div>
            <h2>{namelist}</h2>
        </div>
    )
}

export default TermList;