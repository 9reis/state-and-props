import React from 'react'

const ChangeName = ({ username, setUsername }) => {
    const handlePropChange = () => {
        // function to change name
        setUsername("there");

    }
    return (
        <>
            <button onClick={handlePropChange}>
                Hide My name
            </button>
            <p>
                {username}, what do you have plannet for today?
            </p>
        </>

    )
}

export default ChangeName