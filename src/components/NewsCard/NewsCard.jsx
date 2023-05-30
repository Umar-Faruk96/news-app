import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const NewsCard = ({ article }) => {
  const { title, author, description, urlToImage, url } = article;

  return (
    <Col className="d-flex align-items-stretch">
      <Card border="info">
        <Card.Img
          variant="top"
          src={urlToImage}
          alt={urlToImage ? "Post Image shown" : ""}
        />
        <Card.Header className="fw-light">
          Author : {author ? `${author.slice(0, 10)}....` : ""}
        </Card.Header>
        <Card.Body>
          <Card.Title className="h6">{title}</Card.Title>
          <Card.Text className="fs-6 fw-light">
            {`${description.slice(0, 100)} ......`}
          </Card.Text>
          <Card.Link href={url}>
            <Button variant="primary">Read More</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
