import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    mode: 'light',
    primaryBG: 'white ',
    secondaryBG: '#F3F3F3',
    tertiaryBG: '#F0D0D0',
    primaryBorder: 'lightCoral',
    text:'black'
  }
})

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primaryBG: '#3E3E3E',
    secondaryBG: '#181818',
    tertiaryBG: '#D0F0E0',
    quaternaryBG: '#D0F0E010',
    primaryBorder: 'lightSeaGreen',
    text:'white'
  }
})