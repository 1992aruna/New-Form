import React, { useEffect, useState } from "react";
import axios from "axios";
//import { Container } from "react-bootstrap";

const Report = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const form = axios.get("http://localhost:5000/form/");
      setForms(form);
    };
    fetchdata();
  }, []);


  return (

    forms &&
        <div className="table table-bordered text-white" >
        {forms.map((form) => (
          <div key={form._id}>
            <h1>{form.name}</h1>
          </div>
          
        ))}
             
        </div>
      
  );
}

export default Report;