
import Sidebar from "./components/Sidebar"
import { Settings } from "./microComponents/Settings";
import SectionDisplayer from "./microComponents/SectionDisplayer";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { DarkTheme, MainTheme } from "./themes";
function App() {
    const [currentComp, setCurrentComp] = useState('ABOUT ME');
    const [isDark, setIsDark] = useState(true);
    const toggleDarkTheme = () => setIsDark(!isDark)
    document.body.style.backgroundColor = isDark? "#181818" : "#EFEFEF"
    return (
        <ThemeProvider theme={isDark ? DarkTheme : MainTheme } >
            <Box sx={{
                paddingLeft: '350px',
                width: '100%',
                height: '100vh'
            }}>
                <Sidebar setCurrentComp={setCurrentComp} currentComp={currentComp} />
                <Stack sx={{ height: '100%' }}>
                    <SectionDisplayer currentComp={currentComp} />
                </Stack>
                <Settings toggleDarkTheme={toggleDarkTheme} />
            </Box >
        </ThemeProvider> 
    )
}

export default App