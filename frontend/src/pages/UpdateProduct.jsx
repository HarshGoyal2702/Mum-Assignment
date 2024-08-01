import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
const defaultTheme = createTheme();

export default function NewProduct() {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();
  const id = useParams()?.id;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await axios.put(`/api/v1/product/${id}`, formData);
      const data = response.data;
      setLoading(false);
      navigate("/products");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
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
            Update Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              autoFocus
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Description"
              autoFocus
              onChange={(e) => {
                setFormData({
                  ...formData,
                  description: e.target.value,
                });
              }}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Price"
              autoFocus
              onChange={(e) => {
                setFormData({
                  ...formData,
                  price: e.target.value,
                });
              }}
            />{" "}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Category"
              autoFocus
              onChange={(e) => {
                setFormData({
                  ...formData,
                  category: e.target.value,
                });
              }}
            />{" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "Updating" : "Update Product"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
