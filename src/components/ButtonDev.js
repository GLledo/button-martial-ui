import React from 'react'
import Button from '@mui/material/Button'

 const ButtonDev = ({ nameButon, text }) =>{
    return (
        <div>
            <p>{text}</p>
            <Button >{nameButon}</Button>
        </div>
    )
}

export default  ButtonDev
