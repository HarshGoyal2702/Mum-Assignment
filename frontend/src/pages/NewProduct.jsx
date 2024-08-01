import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function NewProduct({ isAuthenticated }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("name"),
      description: data.get("description"),
      category: data.get("category"),
      price: data.get("price"),
    };
    console.log(formData);
    try {
      const response = await axios.post("/api/v1/product/new", formData);
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className=" mt-[100px]">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "initial",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required={true}
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="name"
              autoFocus
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              type="name"
              name="description"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="Category"
              type="name"
              id="category"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              id="price"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
