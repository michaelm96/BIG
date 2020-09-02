import React, { useState } from "react";
import { Form, Grid, Button, Icon, Select, Message } from "semantic-ui-react";

const options = [
  { key: "a", text: "Admin", value: "admin" },
  { key: "s", text: "Surveyor", value: "surveyor" },
];

function AddForm({ clickHandler }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [msgData, setMsgData] = useState(false);
  const [role, setRole] = useState("admin");

  const updateForm = (e, data) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name == "lastName") {
      setLastName(e.target.value);
    }
    if (data && data.name == "role") {
      setRole(data.value);
    }
  };

  const submit = () => {
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorCode) {
          if (data.message.firstName) {
            setFirstNameErr(data.message.firstName);
            setTimeout(() => {
              setFirstNameErr(false);
            }, 2500);
          }
          if (data.message.lastName) {
            setLastNameErr(data.message.lastName);
            setTimeout(() => {
              setLastNameErr(false);
            }, 2750);
          }
          if (data.message.email) {
            setEmailErr(data.message.email);
            setTimeout(() => {
              setEmailErr(false);
            }, 3000);
          }
          if (data.message.password) {
            setPasswordErr(data.message.password);
            setTimeout(() => {
              setPasswordErr(false);
            }, 3250);
          }
        } else {
          setMsgData(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid divided="vertically" className="entireContent">
        <Grid.Row columns={1}>
          <Grid.Column>
            <h1>SurveyorApp</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={8}>
          <Grid.Column style={{ marginLeft: "0px", marginRight: "0px" }}>
            <Button
              animated="vertical"
              onClick={() => {
                clickHandler();
              }}
            >
              <Button.Content hidden>Menu</Button.Content>
              <Button.Content visible>
                <Icon name="bars" />
              </Button.Content>
            </Button>
          </Grid.Column>

          <Grid.Column style={{ marginLeft: "30vw" }}>
            <h2 style={{ width: "11vw" }}>Register New Acount</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Form
            style={{ minWidth: "100vw", padding: "0 3vw", minHeight: "80vh" }}
            onSubmit={() => {
              submit();
            }}
          >
            {msgData && (
              <Message positive>
                <h1>
                  Name: {firstName} {lastName}, Email: {email}, Password:{" "}
                  {password}, Role: {role}{" "}
                </h1>
                <p>
                  Save/Give this data to your new partner before move to another
                  page
                </p>
              </Message>
            )}
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                name="firstName"
                type="text"
                onChange={(e) => updateForm(e)}
                error={firstNameErr}
              />
              <Form.Input
                fluid
                label="Last name"
                name="lastName"
                type="text"
                placeholder="Last name"
                onChange={(e) => updateForm(e)}
                error={lastNameErr}
              />
              <Form.Input
                fluid
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
                onChange={(e) => updateForm(e)}
                error={emailErr}
              />
              <Form.Input
                fluid
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                onChange={(e) => updateForm(e)}
                error={passwordErr}
              />
            </Form.Group>
            <Form.Select
              options={options}
              control={Select}
              label="Role"
              placeholder="Role"
              name="role"
              onChange={(e, data) => updateForm(e, data)}
              error={false}
              value={role}
            />
            <Button type="submit" color="blue">
              Register
            </Button>
          </Form>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default AddForm;
