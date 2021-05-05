import React from "react";
import { Container, Table } from "reactstrap";
import { useDonerList } from "./hooks";
import Filters from "./Filters";
import { DataLoader } from "../../utils/utils";

const DonarList = ({type}) => {
  const { donarList, handleResetFilter } = useDonerList(type);
  return (
    <Container className="bg-light mt-5 p-5">
      <h2 className="text-center pb-5">{type.substring(0, 1).toUpperCase() + type.substring(1)} List</h2>
      <Filters handleResetFilter={handleResetFilter} />
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>{type == "donar" ? "Donate" : "Need"} Type</th>
            <th>Cylinder {type == "donar" ? "available" : "Needed"}</th>
            <th>Medicine name </th>
            <th>Beds {type == "donar" ? "available" : "Needed"}</th>
            <th>{type == "donar" ? "Donar" : "Seeker"} Name</th>
            <th>{type == "donar" ? "Donar" : "Seeker"} Mobile Number</th>
            <th>{type == "donar" ? "Donar" : "Seeker"} Age</th>
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
