import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Form } from "./Form.js"

const List = () => {
  //const [forms, setForms] = useState([]);

useEffect(() => {
    async function fetchForms() {
    try {
      const requesUrl = "http://localhost:5000/form"
      const response = fetch(requesUrl);
      const responseJSON = response.json();
      console.log(responseJSON);
      //setForms(responseJSON);
    } catch (err) {
      console.log(err);
    }
  };
  fetchForms();
  },[]);


  return (
    <React.Fragment>
      <Container>
         <table className="table table-bordered text-white">
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
        {Form.map((i) => (
            <tr>
              <th scope="row" key={i.id}></th>
              <td>{i.name}</td>
              <td>{i.nickname}</td>
              <td>{i.qualification}</td>
              <td>{i.position}</td>
              <td>{i.state}</td>
              <td>{i.district}</td>
              <td>{i.village}</td>
              <td>{i.constituencyloksabha}</td>
              <td>{i.constituencyassembly}</td>
              <td>{i.phonenumber}</td>
              <td>{i.email}</td>
              <td>{i.facebook}</td>
              <td>{i.instagram}</td>
              <td>{i.image1}</td>
              <td>{i.image2}</td>
              <td>{i.image3}</td>
              <td>{i.image4}</td>
            </tr>
          ))}
        </tbody>
            </table>
      </Container>
    </React.Fragment>
  );
}

export default List;