import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Row, Col } from "antd";
import "./card.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios("http://localhost:1337/articles");
      setArticles(response.data);
      console.log(response.data[0].author.name);
    };
    fetchArticles();
  }, []);

  //   if (response.data != NULL) {
  //     return;
  //   }

  //Default card code

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderComp = articles.map((item, index) => {
    return (
      <div className="postCard">
        <Row>
          <Col>
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
                subheader={item.published_at}
              />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.author}
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{item.content}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>
    );
  });

  return <>{renderComp}</>;
};
export default PostCard;

// import * as React from "react";
// import Card from "@mui/material/Card";
// import axios from "axios";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Row, Col } from "antd";
// import "./card.css";

// const PostCard = () => {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     const fetchArticles = async () => {
//       const response = await axios("http://localhost:1337/articles");
//       setArticles(response.data);
//       console.log(response.data[0]);
//     };
//     fetchArticles();
//   }, []);

//   const renderComp = articles.map((item, index) => {
//     return (
//       <div>
//         <Card key={index} sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             alt="green iguana"
//             height="140"
//             image="/static/images/cards/contemplative-reptile.jpg"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {item.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   });
// };
// export default PostCard;
