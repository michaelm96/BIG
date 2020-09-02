import React, { useState } from "react";
import {
  Grid,
  Image,
  Button,
  Icon,
  Card,
  Sidebar,
  Segment,
  Menu,
  Header,
} from "semantic-ui-react";
import { Link, Redirect, useHistory } from "react-router-dom";
import TableContent from "../../components/tableContent";
import './style.css'

function AddUser() {
  const [clicked, setClicked] = useState(false);
  const role = localStorage.getItem("role");
  const history = useHistory();

  const clickHandler = () => {
    setClicked(!clicked);
  };

  if (!localStorage.getItem("access_token")) {
    return <Redirect to={"/login"} />;
  }

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          onHide={() => setClicked(false)}
          vertical
          visible={clicked}
          width="thin"
        >
          <Menu.Item as="a" onClick={() => history.push("/vip")}>
            <Icon name="home" />
            <label>Home</label>
          </Menu.Item>
          {role === "admin" && (
            <>
              <Menu.Item as="a" onClick={() => history.push("/table")}>
                <Icon name="checkmark" />
                <label>Verify</label>
              </Menu.Item>
              <Menu.Item as="a" onClick={() => history.push("/addUser")}>
                <Icon name="add user" />
                <label>Register A New User</label>
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() => {
                  localStorage.removeItem("access_token");
                  localStorage.removeItem("role");
                  history.push("/");
                }}
              >
                <Icon name="sign-out" />
                <label>Log-Out</label>
              </Menu.Item>
            </>
          )}
          {role === "surveyor" && (
            <>
              <Menu.Item as="a" onClick={() => history.push("/table")}>
                <Icon name="cart plus" />
                <label>Product Management</label>
              </Menu.Item>
              <Menu.Item as="a" onClick={() => history.push("/addProduct")}>
                <Icon name="add" />
                <label>Add Product</label>
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() => {
                  localStorage.removeItem("access_token");
                  localStorage.removeItem("role");
                  history.push("/");
                }}
              >
                <Icon name="sign-out" />
                <label>Log-Out</label>
              </Menu.Item>
            </>
          )}
        </Sidebar>
        <Sidebar.Pusher>
          <Segment>
            <TableContent clickHandler={clickHandler} />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default AddUser;
