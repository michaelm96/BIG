import React, { useState, useEffect } from "react";
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
import "./style.css";

function Content({ clickHandler }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => {
        let newArr = [];
        data.map((ele) => {
          if (ele.status === "approved") {
            newArr.push(ele);
          }
        });
        setProducts(newArr);
      });
  }, []);

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
            <h2 style={{ width: "11vw" }}>Product List</h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          columns={3}
          wrapped
          style={{
            overflow: "auto",
            maxHeight: "70vh",
            minHeight: "70vh",
            border: "1px solid #649173",
            margin: "2vh 2vw",
          }}
        >
          {products.length === 0 && (
            <h3 style={{ margin: "0px auto" }}>No Product Found</h3>
          )}
          {products &&
            products.map((product, key) => {
              return (
                <Grid.Column
                  key={key}
                  style={{ maxWidth: "35vw", maxHeight: "70vh" }}
                >
                  <Card centered>
                    <Image
                      src={product.imageUrl}
                      ui={false}
                      style={{ maxWidth: "30vw", maxHeight: "35vh" }}
                    />
                    <Card.Content>
                      <Card.Header>{product.title}</Card.Header>
                      <Card.Meta>
                        {new Date().toDateString(product.date).substring(4)}
                      </Card.Meta>
                      <Card.Description>{product.description}</Card.Description>
                    </Card.Content>
                    <Card.Content style={{ fontWeight: "bolder" }}>
                      Rp{" "}
                      {product.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })}
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Content;
