import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./Reports.css";

const Form = () => { 
  const [forms, setForms] = useState([]);

  useEffect(() => {
      formUser();
  }, []);

const formUser = async () => {
    const result = await axios.get("http:localhost:3000/forms,");
    setForms(result.data.reverse);
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
          {forms.map((form, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{form.name}</td>
              <td>{form.nickname}</td>
              <td>{form.qualification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};
export default Form;
