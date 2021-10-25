import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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


 const ButtonDev = ({ nameButon, variantButton, colorBg ,simplified, positionIcon}) =>{

  console.log(simplified)
    return (

      simplified ?(
          positionIcon ?(
            <ThemeProvider theme={theme}>
              <Button type="default"  size="large" color={colorBg}  variant={variantButton} startIcon={<AddShoppingCartIcon />}>{nameButon}</Button>
            </ThemeProvider>
          )
          :
          (
            <ThemeProvider theme={theme}>
              <Button type="default"  size="large" color={colorBg}  variant={variantButton} endIcon={<AddShoppingCartIcon />}>{nameButon}</Button>
            </ThemeProvider>
          )
        )
        :
        (
          <ThemeProvider theme={theme}>
            <Button type="default"  size="large" color={colorBg}  variant={variantButton} >{nameButon}</Button>
          </ThemeProvider>
        )
    )
}

export default  ButtonDev
