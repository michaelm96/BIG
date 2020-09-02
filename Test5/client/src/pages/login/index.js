import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Checkbox, Form, Grid, Icon, Message } from "semantic-ui-react";
import "./style.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const login = () => {
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorCode) {
          setErr(data.message);
          setTimeout(() => {
            setErr(false);
          }, 3000);
        } else {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("role", data.role);
          history.push("/vip")
        }
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  const updateForm = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <Grid divided="vertically" className="entireContent">
        <Grid.Row Row={1}>
          <Grid.Column>
            <h1 style={{ marginRight: "3vw" }}>SurveyorApp</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={8}>
          <Grid.Column style={{ marginLeft: "0px", marginRight: "0px" }}>
            <Button
              animated="vertical"
              onClick={() => {
                history.push("/");
              }}
            >
              <Button.Content hidden>Home</Button.Content>
              <Button.Content visible>
                <Icon name="home" />
              </Button.Content>
            </Button>
          </Grid.Column>

          <Grid.Column style={{ marginLeft: "30vw" }}>
            <h2 style={{ width: "11vw" }}>Login</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Form className="formStyle" onSubmit={() => login()}>
            {err && (
              <Message negative>
                <p>{err}</p>
              </Message>
            )}
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Your Email"
                name="email"
                type="email"
                className="form-control"
                onChange={(e) => updateForm(e)}
                value={email}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Your Password"
                name="password"
                type="password"
                className="form-control"
                onChange={(e) => updateForm(e)}
                value={password}
              />
            </Form.Field>
            <br />
            <Button type="submit" color="green">
              Login
            </Button>
          </Form>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Login;
