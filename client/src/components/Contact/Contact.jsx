import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import "./Contact.scss";
import { ReactComponent as EmailIcon } from "./email.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {

  };

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div id="Contact" className="Contact section">
      <div className="section-title">
        <h1>Contact</h1>
      </div>
      <Container className="card" component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <EmailIcon className="icon" />

          <h2>Let's Get In Touch</h2>
          <form
            className={classes.form}
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
              autoComplete='off'
              id="name"
              name="name"
              label="Name"
              // autoFocus note: don't use causes automatically scrolling down to contact ignoring home page
            />
            <TextField
              margin="normal"
              inputRef={register}
              required
              fullWidth
              autoComplete='off'
              id="email"
              name="email"
              label="Email Address"
            />
            <TextField
              margin="normal"
              inputRef={register}
              required
              fullWidth
              autoComplete='off'
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
              className={classes.submit}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
