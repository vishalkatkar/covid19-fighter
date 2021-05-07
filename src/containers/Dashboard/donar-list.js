import React from "react";
import { Container, Table } from "reactstrap";
import { useDonerList } from "./hooks";
import Filters from "./Filters";
import moment from 'moment';
import { DataLoader } from "../../utils/utils";

const DonarList = ({type}) => {
  const { donarList, handleResetFilter } = useDonerList(type);
  return (
    <Container className="bg-light mt-5 p-5">
      <h2 className="text-center pb-5">{type == "donar" ? "Donor" : "Seeker"} List</h2>
      <Filters handleResetFilter={handleResetFilter} />
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Posted Date</th>
            <th>{type == "donar" ? "Donate" : "Need"} Type</th>
            <th>Cylinder {type == "donar" ? "available" : "Needed"}</th>
            <th>Medicine name </th>
            <th>Beds {type == "donar" ? "available" : "Needed"}</th>
            <th>{type == "donar" ? "Donor" : "Seeker"} Name</th>
            <th>{type == "donar" ? "Donor" : "Seeker"} Mobile Number</th>
            <th>{type == "donar" ? "Donor" : "Seeker"} Age</th>
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
                <td>{moment(postedDate).format("DD/MM/YYYY, hh:mm a")}</td>
                  <td>{donateType}</td>
                  <td>{noOfCylinder || "NA"}</td>
                  <td>{medicineName || "NA"}</td>
                  <td>{noOfBed || "NA"}</td>
                  <td>{donarName}</td>
                  <td>{mobileNumber}</td>
                  <td>{age}</td>
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
