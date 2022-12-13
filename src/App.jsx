
import Sidebar from "./components/Sidebar"
import { Settings } from "./microComponents/Settings";
import SectionDisplayer from "./microComponents/SectionDisplayer";

import { Box, Stack } from "@mui/material";
import { useState } from "react";

function App() {
    const [currentComp, setCurrentComp] = useState()
    return (
        <Box sx={{
            paddingLeft: '240px',
            width: 'calc(100% - 120px)',
            height: '100vh',
            bgcolor: '#f3f3f3'
        }}>
            <Sidebar setCurrentComp={setCurrentComp} />
            <Stack sx={{ height: '100%', }}>
                <SectionDisplayer currentComp={currentComp} />
            </Stack>
            <Settings />
        </Box >
    )
}

export default App