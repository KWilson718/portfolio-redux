import {createTheme} from "@mui/material/styles";

const getTheme = (mode) => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#ffffff",
        },
        background: {
          default: mode === "dark" ? "#121212" : "#f5f5f5",
          paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
        },
        text: {
          primary: mode === "dark" ? "#ffffff" : "#333333",
          secondary: mode === "dark" ? "#bbbbbb" : "#555555",
        },
      },
      typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: {
          fontSize: "2rem",
          fontWeight: 700,
        },
        title1: {
          fontSize: "3rem",
          fontWeight: 700,
        },
        subTitle1: {
          fontSize: "1.5rem",
          color: mode === "dark" ? "#cccccc" : "#eeeeee",
        },
        body1: {
          fontSize: "1rem",
          fontWeight: 500,
        },
        body2: {
          fontSize: "0.9rem",
          fontWeight: 100,
        },
        cardTitle1: {
          fontSize: "1.25rem",
          fontWeight: 600,
        }
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: "8px",
              color: `${mode === "dark" ? "#bbbbbb" : "#333333"} !important`,
            },
          },
        },
        MuiTabs: {
          styleOverrides: {
            root: {
              "& .MuiTabs-indicator": {
                backgroundColor: mode === "dark" ? "#dddddd" : "#eeeeee", // Make the indicator visible
              },
            },
          },
        },
        MuiTab: {
          styleOverrides: {
            root: {
              color: `${mode === "dark" ? "#bbbbbb" : "#dddddd"} !important`,
              "&.Mui-selected": {
                color: "#ffffff !important",
                fontWeight: 700,
              },
            },
          },
        },
      },
    });
}

export default getTheme;