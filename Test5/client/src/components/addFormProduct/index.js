import React, { useState } from "react";
import { Form, Grid, Button, Icon, Select, Message } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

const options = [
  { key: "a", text: "Admin", value: "admin" },
  { key: "s", text: "Surveyor", value: "surveyor" },
];

function AddForm({ clickHandler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState(new Date());
  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [imageUrlErr, setImageUrlErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [msgData, setMsgData] = useState(false);
  const access_token = localStorage.getItem("access_token");

  const updateForm = (e, data) => {
    if (e && e !== undefined && e.target !== null) {
      if (e.target.name == "title") {
        setTitle(e.target.value);
      } else if (e.target.name == "description") {
        setDescription(e.target.value);
      } else if (e.target.name == "imageUrl") {
        setImageUrl(e.target.value);
      } else if (e.target.name == "price") {
        setPrice(e.target.value);
      }
    }
    if (data && data.name == "date") {
      setDate(data.value);
    }
  };

  const submit = () => {
    fetch("http://localhost:3000/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: access_token,
      },
      body: JSON.stringify({
        imageUrl,
        price,
        title,
        description,
        date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorCode) {
          if (data.message.title) {
            setTitleErr(data.message.title);
            setTimeout(() => {
              setTitleErr(false);
            }, 2500);
          }
          if (data.message.description) {
            setDescriptionErr(data.message.description);
            setTimeout(() => {
              setDescriptionErr(false);
            }, 2750);
          }
          if (data.message.imageUrl) {
            setImageUrlErr(data.message.imageUrl);
            setTimeout(() => {
              setImageUrlErr(false);
            }, 3000);
          }
          if (data.message.price) {
            setPriceErr(data.message.price);
            setTimeout(() => {
              setPriceErr(false);
            }, 3250);
          }
          if (data.message.date) {
            setDateErr(data.message.date);
            setTimeout(() => {
              setDateErr(false);
            }, 3500);
          }
        } else {
          setMsgData(true);
          setTimeout(() => {
            setMsgData(false);
          }, 2500);
          setTitle("");
          setDescription("");
          setImageUrl("");
          setPrice(1);
          setDate(new Date());
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
            <h2 style={{ width: "11vw" }}>Add Product</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Form
            style={{
              minWidth: "100vw",
              padding: "0 3vw",
              minHeight: "80vh",
              overflow: "auto",
            }}
            onSubmit={() => {
              submit();
            }}
          >
            {msgData && (
              <Message positive>
                <h1>Your product successfully added</h1>
              </Message>
            )}
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Title"
                placeholder="Title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => updateForm(e)}
                error={titleErr}
                />
              <Form.Input
                fluid
                label="Description"
                name="description"
                type="text"
                value={description}
                placeholder="Description"
                onChange={(e) => updateForm(e)}
                error={descriptionErr}
                />
              <Form.Input
                fluid
                label="Image Url"
                placeholder="Image Url"
                name="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => updateForm(e)}
                error={imageUrlErr}
                />
              <Form.Input
                fluid
                label="Price"
                placeholder="Price"
                name="price"
                type="number"
                value={price}
                defaultValue="1"
                min="1"
                onChange={(e) => updateForm(e)}
                error={priceErr}
              />
            </Form.Group>
            <SemanticDatepicker
              label="Date"
              name="date"
              onChange={(e, data) => {
                updateForm(e, data);
              }}
              showToday={true}
              value={date}
              error={dateErr}
            />
            <br />
            <Button type="submit" color="blue">
              Add Product
            </Button>
          </Form>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default AddForm;
