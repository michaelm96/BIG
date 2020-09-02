import React, { useState, useEffect } from "react";
import {
  Form,
  Grid,
  Button,
  Icon,
  Select,
  Message,
  Table,
} from "semantic-ui-react";

function TableContent({ clickHandler }) {
  const access_token = localStorage.getItem("access_token");
  const role = localStorage.getItem("role");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    if (role === "admin") {
      fetch("http://localhost:3000/product/")
        .then((res) => res.json())
        .then((data) => {
          let newArr = [];
          data.map((ele) => {
            if (ele.status === "pending") {
              newArr.push(ele);
            }
          });
          setProducts(newArr);
        })
        .catch((err) => console.log(err));
    } else if (role === "surveyor") {
      fetch("http://localhost:3000/product/productByUserId", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: access_token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const updateStatus = (product) => {
    const { id, title, description, imageUrl, price, status, date } = product;

    fetch(`http://localhost:3000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: access_token,
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        price,
        status,
        date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        start();
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: access_token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        start();
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
            {role === "admin" ? (
              <h2 style={{ width: "11vw" }}>Verify</h2>
            ) : (
              <h2 style={{ width: "11vw" }}>Product Management</h2>
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          style={{
            maxHeight: "70vh",
            overflow: "auto",
            margin: "0px 3vw",
            minHeight: "80vh",
          }}
        >
          <Table
            celled
            singleLine
            inverted
            style={{ backgroundImage: "linear-gradient(#C779D0, #fcb045)" }}
          >
            <Table.Header
              style={{
                backgroundImage: "linear-gradient(#7b4397, #C779D0)",
                border: "3px solid white",
              }}
            >
              <Table.Row style={{ textAlign: "center" }}>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Image Url</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                {role === "surveyor" && (
                  <Table.HeaderCell>Status</Table.HeaderCell>
                )}
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {products &&
                products.map((product, key) => {
                  return (
                    <Table.Row key={key} style={{ textAlign: "center" }}>
                      <Table.Cell>{key + 1}</Table.Cell>
                      <Table.Cell>{product.title}</Table.Cell>
                      <Table.Cell>{product.description}</Table.Cell>
                      <Table.Cell>
                        <a href={product.imageUrl} target="_blank">
                          Click to see image
                        </a>
                      </Table.Cell>
                      <Table.Cell>
                        {new Date().toDateString(product.date).substring(4)}
                      </Table.Cell>
                      <Table.Cell>
                        Rp{" "}
                        {product.price
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                      </Table.Cell>
                      {role === "surveyor" && (
                        <>
                          <Table.Cell>{product.status}</Table.Cell>
                          <Table.Cell>
                            <Button
                              color="red"
                              onClick={() => {
                                deleteProduct(product.id);
                              }}
                            >
                              Delete
                            </Button>
                          </Table.Cell>
                        </>
                      )}
                      {role === "admin" && (
                        <Table.Cell>
                          <Button.Group>
                            <Button
                              positive
                              onClick={() => {
                                updateStatus({
                                  ...product,
                                  status: "approved",
                                });
                              }}
                            >
                              Approve
                            </Button>
                            <Button.Or />
                            <Button
                              negative
                              onClick={() => {
                                updateStatus({
                                  ...product,
                                  status: "declined",
                                });
                              }}
                            >
                              Decline
                            </Button>
                          </Button.Group>
                        </Table.Cell>
                      )}
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
          {products.length === 0 && (
            <h3 style={{ margin: "0px auto" }}>No Product Found</h3>
          )}
        </Grid.Row>
      </Grid>
    </>
  );
}

export default TableContent;
