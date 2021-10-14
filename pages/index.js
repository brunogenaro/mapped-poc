import * as React from "react";
import Head from "next/head";
import {
  createTheme,
  ThemeProvider,
  styled,
  alpha,
} from "@mui/material/styles";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import ModalUnstyled from "@mui/core/ModalUnstyled";

const theme = createTheme({
  shadows: ["none"],
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
  },
});

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: "#fff";
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#fff",
  boxShadow: "rgb(0 0 0 / 26%) 0px 10px 20px 0px",
  borderRradius: 2,
  p: 2,
  px: 4,
  pb: 3,
};

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const CustomSelect = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const CustomInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  "& .MuiInputBase-input": {
    width: "100%",
    borderRadius: 2,
    color: "#191F2C",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #8C8F95",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    // transition: theme.transitions.create([
    //   "border-color",
    //   "background-color",
    //   "box-shadow",
    // ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Jost",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      border: "1px solid #4A3BCF",
    },
    "&:focus": {
      boxShadow: 0,
      // borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomButton = styled(Button)({
  textTransform: "none",
  fontSize: 18,
  borderRadius: 2,
  padding: "10px 22px",
  fontFamily: "'Jost', sans-serif",
  color: "#FFF",
  // background:
  // '&:hover': {
  //   backgroundColor: '#0069d9',
  //   borderColor: '#0062cc',
  //   boxShadow: 'none',
  // },
  // '&:active': {
  //   boxShadow: 'none',
  //   backgroundColor: '#0062cc',
  //   borderColor: '#005cbf',
  // },
  // '&:focus': {
  //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  // },
});

const ColorPrimaryButton = styled(CustomButton)(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#51C0AC",
  "&:hover": {
    backgroundColor: "#A8DFD5",
  },
  "&:active": {
    backgroundColor: "#85D3C5",
  },
}));

const ColorPrimary2Button = styled(CustomButton)(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#4A3BCF",
  "&:hover": {
    backgroundColor: "#A49DE7",
  },
  "&:active": {
    backgroundColor: "#8076DD",
  },
}));

const ColorSecondaryButton = styled(CustomButton)(({ theme }) => ({
  color: "#51C0AC",
  border: "1px solid #51C0AC",
  "&:hover": {
    color: "#A8DFD5",
    border: "1px solid #A8DFD5",
  },
  "&:active": {
    color: "#85D3C5",
    border: "1px solid #85D3C5",
  },
}));

const ColorSecondary2Button = styled(CustomButton)(({ theme }) => ({
  color: "#4A3BCF",
  border: "1px solid #4A3BCF",
  "&:hover": {
    color: "#A49DE7",
    border: "1px solid #A49DE7",
  },
  "&:active": {
    color: "#8076DD",
    border: "1px solid #8076DD",
  },
}));

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Mapped</a>
          </h1>

          <div className={styles.buttons}>
            <div style={{ width: "100%" }}>
              Buttons
              <hr />
            </div>

            <div style={{ width: "48%", float: "left" }}>
              <span style={{ display: "block" }}>Primary</span>

              <ColorPrimaryButton variant="contained" disableElevation>
                Visit Mapp Store
              </ColorPrimaryButton>

              <br />
              <br />

              <ColorPrimary2Button variant="contained" disableElevation>
                Visit Mapp Store
              </ColorPrimary2Button>
            </div>

            <div style={{ width: "48%", float: "right" }}>
              <span style={{ display: "block" }}>Secondary</span>
              <ColorSecondaryButton disableElevation>
                Visit Mapp Store
              </ColorSecondaryButton>

              <br />
              <br />

              <ColorSecondary2Button disableElevation>
                Visit Mapp Store
              </ColorSecondary2Button>
            </div>
          </div>

          <div className={styles.inputs}>
            <div style={{ width: "100%", marginTop: 20 }}>
              Inputs
              <hr />
            </div>

            <div style={{ width: "48%", float: "left" }}>
              <div style={{ width: "100%" }}>Text</div>
              <FormControl variant="standard" style={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#191F2C",
                    marginBottom: 0,
                    fontFamily: "Jost",
                  }}
                >
                  Placeholder
                </InputLabel>
                <CustomInput
                  placeholder="Optional placeholder text"
                  id="bootstrap-input"
                  fullWidth
                />
              </FormControl>

              <br />
              <br />

              <FormControl variant="standard" style={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#191F2C",
                    marginBottom: 0,
                    fontFamily: "Jost",
                  }}
                >
                  Label
                </InputLabel>
                <CustomInput
                  defaultValue="Entered Text"
                  id="bootstrap-input"
                  fullWidth
                />
              </FormControl>
            </div>

            <div style={{ width: "48%", float: "right" }}>
              <span style={{ display: "block" }}>
                Select (This one needs more work)
              </span>

              <FormControl
                fullWidth
                style={{
                  padding: "10px 0",
                }}
              >
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"12"}
                  style={{
                    // padding: "12px 16px",
                    // border: "1px solid #8C8F95",
                    // borderRadius: "2px",
                    "&:focus:": {
                      borderColor: "#4A3BCF",
                    },
                    // background: "red",
                  }}
                  // onChange={handleChange}
                >
                  <MenuItem
                    value={10}
                    style={{
                      fontFamily: "Jost",
                    }}
                  >
                    Ten
                  </MenuItem>
                  <MenuItem
                    value={20}
                    style={{
                      fontFamily: "Jost",
                    }}
                  >
                    Twenty
                  </MenuItem>
                  <MenuItem
                    value={30}
                    style={{
                      fontFamily: "Jost",
                    }}
                  >
                    Thirty
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className={styles.inputs}>
            <div style={{ width: "100%", marginTop: 20 }}>
              Modal
              <hr />
            </div>

            <ColorPrimary2Button
              variant="contained"
              disableElevation
              onClick={handleOpen}
            >
              Open Modal
            </ColorPrimary2Button>
          </div>
        </main>

        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <div style={{ width: "100%", fontFamily: "Jost" }}>
              <h3 style={{ padding: 0, margin: 0 }}>I am a modal!</h3>
              <hr />
              <p style={{ width: "100%", marginTop: 20, fontFamily: "Jost" }}>
                Hello Mapped team! This is a quick proof of concept of
                customizing Material UI to adapt to our design system!
              </p>
            </div>
          </Box>
        </StyledModal>
      </ThemeProvider>
    </div>
  );
}
