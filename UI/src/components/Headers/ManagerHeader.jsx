import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'

class ManagerHeader extends React.Component {
    render() {
        return (
            <>
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                    <Container fluid>
                        <div className="header-body">
                            {/* Card stats */}
                            <Row>
                                <Col xl="3"  >
                                    <Card className="card-stats mb-4 mb-xl-0">
                                        <CardBody>
                                            <Row>
                                                <div className="col">
                                                    <CardTitle
                                                        tag="h5"
                                                        className="text-uppercase text-muted mb-0">
                                                        Topics Announce
                                                    </CardTitle>
                                                    <span className="h1 font-weight-bold mb-0">
                                                        3
                                                    </span>

                                                </div>
                                                <Col className="col-auto">
                                                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                        <i className="fas fa-chart-bar" />
                                                    </div>
                                                </Col>

                                            </Row>
                                            <p className="mt-3 mb-0 text-muted text-sm">
                                                <span className="text-success mr-2">
                                                    <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                                                <span className="text-nowrap">Since last month</span>
                                            </p>
                                            <hr className="my-4" />
                                            <Link to="/student/topic" color="primary" size="lg" >
                                                <Button color="primary" size="lg" block>
                                                    Click for detail
                                            </Button>

                                            </Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xl="3">
                                    <Card className="card-stats mb-4 mb-xl-0">
                                        <CardBody>
                                            <Row>
                                                <div className="col">
                                                    <CardTitle
                                                        tag="h5"
                                                        className="text-uppercase text-muted mb-0">
                                                        Uploads of students
                                                    </CardTitle>
                                                    <span className="h1 font-weight-bold mb-0">
                                                        20
                                                    </span>
                                                </div>
                                                <Col className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                        <i className="fas fa-file-upload" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className="mt-3 mb-0 text-muted text-sm">
                                                <span className="text-danger mr-2">
                                                    <i className="fas fa-arrow-down" /> 3.48%
                                                </span>{" "}
                                                <span className="text-nowrap">Since last week</span>
                                            </p>
                                            <hr className="my-4" />
                                            <Button color="primary" size="lg" block>Click for detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xl="3" >
                                    <Card className="card-stats mb-4 mb-xl-0">
                                        <CardBody>
                                            <Row>
                                                <div className="col">
                                                    <CardTitle
                                                        tag="h5"
                                                        className="text-uppercase text-muted mb-0">
                                                        Uploads to Manager
                                                    </CardTitle>
                                                    <span className="h1 font-weight-bold mb-0">
                                                        6
                                                    </span>
                                                </div>
                                                <Col className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                        <i className="fas fa-check" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className="mt-3 mb-0 text-muted text-sm">
                                                <span className="text-danger mr-2">
                                                    <i className="fas fa-arrow-down" /> 3.48%
                                                </span>{" "}
                                                <span className="text-nowrap">Since last week</span>
                                            </p>
                                            <hr className="my-4" />
                                            <Button color="primary" size="lg" block>Click for detail</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default ManagerHeader;
