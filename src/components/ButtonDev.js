import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    primary: {
      main: '#878787',
    },
    secondary: {
      main: '#1565c0',
    },
  },
});

 const ButtonDev = ({ nameButon, variantButton, colorBg }) =>{
    return (
        <ThemeProvider theme={theme}>
            <Button type="default"  size="large" color={colorBg}  variant={variantButton} >{nameButon}</Button>
        </ThemeProvider>
    )
}

export default  ButtonDev
