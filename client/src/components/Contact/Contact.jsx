import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
// import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
    // const isSuccess = await Axios.post('http://localhost:3030/api/email', data);
  };

  return (
    <div id="Contact" className="Contact section card">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Me
          </Typography>
          <form
            className={classes.form}
            noValidate
            // onSubmit={handleSubmit(onSubmit)}
            name="contact"
            method="POST" data-netlify="true" action="POST"
          >
            <TextField
              margin="normal"
              inputRef={register}
              required
              fullWidth
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
              id="email"
              name="email"
              label="Email Address"
            />
            <TextField
              margin="normal"
              inputRef={register}
              required
              fullWidth
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
