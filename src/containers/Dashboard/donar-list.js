import React from "react";
import { Container, Table } from "reactstrap";
import { useDonerList } from "./hooks";
import Filters from "./Filters";
import { DataLoader } from "../../utils/utils";

const DonarList = () => {
  const { donarList, handleResetFilter } = useDonerList();
  //   if (!donarList.length) return null;
  console.log("donerList::", donarList);
  // if (!donarList.length) return <DataLoader />;
  return (
    <Container className="bg-light mt-5 p-5">
      <h2 className="text-center pb-5">Donar List</h2>
      <Filters handleResetFilter={handleResetFilter} />
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Donate Type</th>
            <th>Cylinder available</th>
            <th>Medicine name </th>
            <th>Beds available</th>
            <th>Donar Name</th>
            <th>Donar Mobile Number</th>
            <th>Donar Age</th>
            <th>Posted Date</th>
            <th>Blood Group</th>
            <th>Pincode</th>
            <th>State</th>
            <th>City</th>
            <th>Block</th>
          </tr>
        </thead>
        <tbody>
          {donarList.length ? (
            donarList.map((donar, index) => {
              const {
                age,
                block,
                bloodGroup,
                city,
                donarName,
                donateType,
                medicineName,
                mobileNumber,
                noOfBed,
                noOfCylinder,
                pinCode,
                postedDate,
                state,
              } = donar;

              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{donateType}</td>
                  <td>{noOfCylinder || "NA"}</td>
                  <td>{medicineName || "NA"}</td>
                  <td>{noOfBed || "NA"}</td>
                  <td>{donarName}</td>
                  <td>{mobileNumber}</td>
                  <td>{age}</td>
                  <td>{postedDate}</td>
                  <td>{bloodGroup}</td>
                  <td>{pinCode}</td>
                  <td>{state}</td>
                  <td>{city}</td>
                  <td>{block}</td>
                </tr>
              );
            })
          ) : (
            <td colSpan="7">No records found</td>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default DonarList;
