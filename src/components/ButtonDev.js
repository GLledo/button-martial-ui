import React from 'react'
import Button from '@mui/material/Button'

 const ButtonDev = ({ nameButon, text, variantButton }) =>{
    return (
        <>
            <Button type="default"  size="large"  variant={variantButton} >{nameButon}</Button>
        </>
    )
}

export default  ButtonDev
