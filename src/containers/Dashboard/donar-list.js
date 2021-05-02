import React from "react";
import { Container, Table } from "reactstrap";
import { useDonerList } from "./hooks";

const DonarList = () => {
  const { donarList } = useDonerList();
  if (!donarList.length) return null;
  console.log("donerList::", donarList);
  return (
    <Container>
      <h2>Doner List:</h2>
      <Table>
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
                    <th scope="row">1</th>
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
