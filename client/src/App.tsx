import {useMemo} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {themeSettings} from "@/theme.ts";

function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
      </div>
  )

}

export default App
