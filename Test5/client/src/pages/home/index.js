import React, { useState } from "react";
import Content from "../../components/content";
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
import { Link, Redirect } from 'react-router-dom'

function Home() {
  const [clicked, setClicked] = useState(false);

  if (localStorage.getItem("access_token")) {
    return <Redirect to={"/vip"} />;
  }

  const clickHandler = () => {
    setClicked(!clicked);
  };

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
          <Menu.Item as="a">
            <Icon name="sign-in" />
            <label>If you're</label>
            <br />
            <label>Admin or Surveyor</label>
            <br />
            <Link to="/login"><a>Click to Login</a></Link>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment>
            <Content clickHandler={clickHandler} />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default Home;
