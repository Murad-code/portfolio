import React from "react";
import "./Contact.scss";
import { ReactComponent as EmailIcon } from "./email.svg";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#014972"
    }
  }
})

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {};

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div id="Contact" className="Contact section">
      <div className="section-title">
        <h1>Contact</h1>
      </div>
      <ThemeProvider theme={theme}>
        <Container className="card" >
          <div>
            <EmailIcon className="icon" />

            <h2>Let's Get In Touch</h2>
            <form
              noValidate
              // onSubmit={sendEmail}
              name="contact"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" />
              <TextField
                margin="normal"
                inputRef={register}
                required
                fullWidth
                autoComplete="off"
                id="name"
                name="name"
                label="Name"
              />
              <TextField
                margin="normal"
                inputRef={register}
                required
                fullWidth
                autoComplete="off"
                id="email"
                name="email"
                label="Email Address"
              />
              <TextField
                margin="normal"
                inputRef={register}
                required
                fullWidth
                autoComplete="off"
                variant="outlined"
                multiline="true"
                id="message"
                name="message"
                label="Message"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </form>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
