import React from "react";
import { Container, Table } from "reactstrap";
import { useDonerList } from "./hooks";
import Filters from "./Filters";

const DonarList = () => {
  const { donarList } = useDonerList();
  console.log("donerList::", donarList);
  if (!donarList.length) return null;
  return (
    <Container className="bg-light mt-5 p-5">
      <h2>Doner List:</h2>
      <Filters />
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Donar Name</th>
            <th>Donar Mobile Number</th>
            <th>Donating</th>
            <th>Cylinder awailable</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {donarList.length
            ? donarList.map((donar, index) => {
                const {
                  donateType,
                  state,
                  city,
                  donarName,
                  mobileNumber,
                  noOfCylinder,
                } = donar;

                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{donarName}</td>
                    <td>{mobileNumber}</td>
                    <td>{donateType}</td>
                    <td>{noOfCylinder}</td>
                    <td>{state}</td>
                    <td>{city}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </Container>
  );
};

export default DonarList;
