import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F04F4C",
      light: "#FA8959",
      dark: "#DB4424",
      lowContrast: "rgba(253, 237, 237, 0.86)"
    },
    text:{
      secondary:"#3E3E3E"
    }
  }
})

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#008B7D",
      light: "#2A91A3",
      dark: "#086099",
      lowContrast: "#3E3E3E"
    },
    text:{
      primary:"#ffffff",
      secondary:"rgba(253, 237, 237, 0.86)"
    },
  }
})