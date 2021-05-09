import React from "react";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  CardTitle,
  CardHeader,
  CardBody,
  Table,
} from "reactstrap";
import { useDonerList } from "./hooks";
import Filters from "./Filters";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const DonarList = ({ type }) => {
  const {
    donarList,
    handleResetFilter,
    handleVieMore,
    setIsViewMore,
    isViewMore,
    userDetail,
  } = useDonerList(type);
  const appliedFilters = useSelector(
    ({ dashboardReducer }) => dashboardReducer.appliedFilters
  );

  const { donateType = "" } = appliedFilters;

  return (
    <Container className="bg-light mt-5 p-2 pt-4">
      <h2 className="text-center pb-5">
        {type == "donar" ? "Donor" : "Seeker"} List
      </h2>
      {isViewMore && userDetail ? (
        <section className="m-2 mt-4">
          <Row className="mb-5">
            <Col sm="6" style={{ margin: "0 auto" }}>
              <Card body>
                <CardHeader tag="h5">Person Detail</CardHeader>
                <CardBody>
                  <CardTitle>
                    <b>Posted Date: </b>
                    <span class="text-primary">
                      {moment(userDetail?.postedDate).format(
                        "DD/MM/YYYY, hh:mm a"
                      )}
                    </span>
                  </CardTitle>
                  <CardTitle>
                    <b>Name: </b>
                    {userDetail?.donarName}
                  </CardTitle>
                  <CardTitle>
                    <b>Mobile Number: </b>
                    {userDetail?.mobileNumber}
                  </CardTitle>
                  <CardTitle>
                    <b>Age: </b>
                    {userDetail?.age}
                  </CardTitle>
                  <CardTitle>
                    <b>State: </b>
                    {userDetail?.state}
                  </CardTitle>
                  <CardTitle>
                    <b>City: </b>
                    {userDetail?.city}
                  </CardTitle>
                  <CardTitle>
                    <b>Block: </b>
                    {userDetail?.block}
                  </CardTitle>
                  <CardTitle>
                    <b>{type == "donar" ? "Donate" : "Need"} Type: </b>
                    {userDetail?.donateType}
                  </CardTitle>
                  {userDetail?.noOfCylinder && (
                    <CardTitle>
                      <b>
                        Cylinder {type == "donar" ? "available " : "Needed "}
                      </b>
                      {userDetail?.noOfCylinder || "NA"}
                    </CardTitle>
                  )}
                  {userDetail?.medicineName && (
                    <CardTitle>
                      <b>Medicine name: </b>
                      {userDetail?.medicineName || "NA"}
                    </CardTitle>
                  )}
                  {userDetail?.bloodGroup && (
                    <CardTitle>
                      <b>Blood Group: </b>
                      {userDetail?.bloodGroup || "NA"}
                    </CardTitle>
                  )}
                  <Button color="info" onClick={() => setIsViewMore(false)}>
                    Go Back
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      ) : (
        <>
          <Filters
            handleResetFilter={handleResetFilter}
            type={type == "donar" ? "donarsList" : "seekersList"}
          />
          {Object.keys(appliedFilters).length > 0 ? (
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Posted Date</th>
                  <th>{type == "donar" ? "Donate" : "Need"} Type</th>
                  {donateType === "plasma" && (
                    <th>Plasma {type == "donar" ? "available" : "Needed"}</th>
                  )}
                  {donateType === "oxygen" && (
                    <th>Cylinder {type == "donar" ? "available" : "Needed"}</th>
                  )}
                  {donateType === "medicines" && (
                    <th>Medicine {type == "donar" ? "available" : "Needed"}</th>
                  )}
                  {donateType === "beds" && (
                    <th>Beds {type == "donar" ? "available" : "Needed"}</th>
                  )}

                  <th>{type == "donar" ? "Donor" : "Seeker"} Name</th>
                  <th>Pincode</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Block</th>
                  <th>Get Details</th>
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
                        <td>
                          {moment(postedDate).format("DD/MM/YYYY, hh:mm a")}
                        </td>
                        <td>{donateType}</td>
                        {donateType === "plasma" && (
                          <td>{bloodGroup || "NA"}</td>
                        )}
                        {donateType === "oxygen" && (
                          <td>{noOfCylinder || "NA"}</td>
                        )}
                        {donateType === "medicines" && (
                          <td>{medicineName || "NA"}</td>
                        )}
                        {donateType === "beds" && <td>{noOfBed || "NA"}</td>}
                        <td>{donarName}</td>
                        <td>{pinCode}</td>
                        <td>{state}</td>
                        <td>{city}</td>
                        <td>{block}</td>
                        <td>
                          <Button
                            color="info"
                            onClick={(e) =>
                              handleVieMore({
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
                              })
                            }
                          >
                            Get Details
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <td colSpan="7">No records found</td>
                )}
              </tbody>
            </Table>
          ) : null}
        </>
      )}
    </Container>
  );
};

export default DonarList;
