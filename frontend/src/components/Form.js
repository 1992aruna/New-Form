import {
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const Form = () => {
//const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    nickname: "",
    qualification: "",
    position: "",
    state: "",
    district: "",
    village: "",
    constituencyloksabha: "",
    constituencyassembly: "",
    phonenumber: "",
    email: "",
    facebook: "",
    instagram: "",
    image1: "",
    image2: "",
    image3: "",
    image4: ""
  });

  const {
    name, 
    nickname, 
    qualification, 
    position, 
    state, 
    district, 
    village, 
    constituencyloksabha, 
    constituencyassembly, 
    phonenumber, 
    email, 
    facebook, 
    instagram, 
    image1, 
    image2, 
    image3, 
    image4 
  } = input;
    const handleChange = (e) => {
    setInput((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    });
    console.log(input);
  };
    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/form ", input )
      .then(res => {
      console.log(res.input);
    }).catch (err => console.log(err))
  setInput({
    ...input,
    name: "",
    nickname: "",
    qualification: "",
    position: "",
    state: "",
    district: "",
    village: "",
    constituencyloksabha: "",
    constituencyassembly: "",
    phonenumber: "",
    email: "",
    facebook: "",
    instagram: "",
    image1: "",
    image2: "",
    image3: "",
    image4: ""
  }); 
  };
  //history.push("/report"); 
    return (
      <form 
      method = "POST" 
      onSubmit={handleSubmit} 
      id= "inputform" 
      name="inputform"
      
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>Nickname</FormLabel>
          <TextField
            value={nickname}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="nickname"
          />
          <FormLabel>Qualification</FormLabel>
          <TextField
            value={qualification}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="qualification"
          />
          <FormLabel>Position</FormLabel>
          <TextField
            value={position}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="position"
          />
          <FormLabel>State</FormLabel>
          <TextField
            value={state}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="state"
            />
          <FormLabel>District</FormLabel>
          <TextField
            value={district}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="district"
          />
          <FormLabel>Village</FormLabel>
          <TextField
            value={village}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="village"
          />
          <FormLabel>Constituencyloksabha</FormLabel>   
          <TextField
            value={constituencyloksabha}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="constituencyloksabha"
          />
          <FormLabel>Constituencyassembly</FormLabel>
          <TextField
            value={constituencyassembly}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="constituencyassembly"
          />
          <FormLabel>Phone Number</FormLabel>
          <TextField
            value={phonenumber}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="phonenumber"
          />
          <FormLabel>Email</FormLabel>
          <TextField
            value={email}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
          />
          <FormLabel>Facebook</FormLabel>
          <TextField
            value={facebook}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="facebook"
          />
          <FormLabel>Instagram</FormLabel>
          <TextField
            value={instagram}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="instagram"
          />
          <FormLabel>Image1</FormLabel>
          <TextField
            value={image1}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image1"
          />
          <FormLabel>Image2</FormLabel>
          <TextField
            value={image2}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image2"
          />
          <FormLabel>Image3</FormLabel>
          <TextField
            value={image3}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image3"
          />
          <FormLabel>Image4</FormLabel>
          <TextField
            value={image4}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image4"
          />
         <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    );
  };
  
export default Form;