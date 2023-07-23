import React from 'react';
import {Typography,Row,Col,Card} from 'antd'; 
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { Link } from 'react-router-dom';
const {Title} = Typography;


const News = () => {
  const {data} = useGetCryptoNewsQuery();
  const cryptoNews = data;
  console.log(cryptoNews);
  if(!cryptoNews)return 'Loading...';
  return (
    <Row gutter = {[24,24]} className = "news-card-container">
      {cryptoNews?.map(name =>
       <Col xs={24} sm={12} lg={8} key={name}>
        <Link to = {name.url}>
          <Card hoverable className = "news-card">
          <a href={name.url}  target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{name.title}</Title>
              </div>
              <p>{name.description.length > 100 ? `${name.description.substring(0, 100)}...` : name.description}</p>
            </a>
          </Card>
        </Link>
       </Col>
      )};
    </Row>
  )
}
export default News