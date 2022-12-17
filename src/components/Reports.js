import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./Reports.css";

const Form = () => { 
  const [forms, setForms] = useState([]);

  useEffect(() => {
      formUser();
  }, []);

const formUser = async () => {
  try{
    const { data } = await axios.get("http:localhost:5000/forms");
    setForms(data);
  } catch (err) {
      console.log(err);
  }
};
  
return (
  <div>
    <div>
      <h1>Report</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Nick Name</th>
            <th scope="col">Qualification</th>
            <th scope="col">Position</th>
            <th scope="col">State</th>
            <th scope="col">District</th>
            <th scope="col">Village</th>
            <th scope="col">Constituencyloksabha</th>
            <th scope="col">Constituencyassembly</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Facebook</th>
            <th scope="col">Instagram</th>
            <th scope="col">Image 1</th>
            <th scope="col">Image 2</th>
            <th scope="col">Image 3</th>
            <th scope="col">Image 4</th>
         </tr>
        </thead>
        <tbody>
        {forms && forms.map((form) => (
            <tr>
              <th scope="row" key={form._id}></th>
              <td>{form.name}</td>
              <td>{form.nickname}</td>
              <td>{form.qualification}</td>
              <td>{form.position}</td>
              <td>{form.state}</td>
              <td>{form.district}</td>
              <td>{form.village}</td>
              <td>{form.constituencyloksabha}</td>
              <td>{form.constituencyassembly}</td>
              <td>{form.phonenumber}</td>
              <td>{form.email}</td>
              <td>{form.facebook}</td>
              <td>{form.instagram}</td>
              <td>{form.image1}</td>
              <td>{form.image2}</td>
              <td>{form.image3}</td>
              <td>{form.image4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};
export default Form;