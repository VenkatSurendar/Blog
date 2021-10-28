import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./card.css";
import axios from "axios";

function PostCard() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios(
        "https://blog-app-task.herokuapp.com/articles",
      );
      setArticles(response.data);
      console.log(response.data[0].author.name);
    };
    fetchArticles();
  }, []);

  const renderComp = articles.map((item, index) => {
    return (
      <div className="card">
        <Col className="gutter-row" span={6}>
          <Card
            key={index}
            bordered={true}
            hoverable
            style={{ width: 240, height: 450 }}
            cover={
              <img
                alt="example"
                height="250"
                src={
                  "https://miro.medium.com/max/1400/1*W-ibEgNC4iDbUepGnHrQRw.png"
                }
              />
            }
          >
            <p>{item.title}</p>
            <p className="desc">{item.description}</p>
            <Link to="/blog">Click Here</Link>
          </Card>
        </Col>
      </div>
    );
  });
  return (
    <div className="postCard">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{renderComp}</Row>
    </div>
  );
}

export default PostCard;
