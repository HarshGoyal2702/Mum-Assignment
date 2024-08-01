import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({
  name,
  description,
  id,
  category,
  price,
}) {
  const navigate = useNavigate();

  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/v1/product/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Product deleted");
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqwQx96Brdskh7N0mY3p9TC86dgIXLdCfdQ&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>{" "}
        <Typography variant="p" component="div">
          Price : {price}{" "}
        </Typography>{" "}
        <Typography variant="p" component="div">
          Category : {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/product/update/${id}`} size="small">
          Update
        </Link>{" "}
        <Button onClick={deleteProduct} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
