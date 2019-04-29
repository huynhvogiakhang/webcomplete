import React from "react";


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Input,
    Row,
    Col,
    Container
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";

class ArticleDetail extends React.Component {
    render() {
        return (
            <>
                <MyHeader />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col></Col>
                        <Col >
                            <Card className="bg-secondary shadow border-0">
                                <CardHeader className="bg-transparent pb-5">
                                    <center>
                                        <h1>Upload Detail</h1>
                                    </center>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-5">
                                    <Row>
                                        <Col>
                                            <div className="text-center">
                                                <h2>Quoc-Anh Do</h2>
                                                <div className="h3 font-weight-300">
                                                    <i className="ni location_pin mr-2" />
                                                    3-4-2019
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr className="my-4" />
                                    <Row>
                                        <Col>
                                            <center>
                                                <h3>File upload</h3>
                                                <p>File name</p>
                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm">
                                                    Download
                                                </Button>
                                            </center>
                                        </Col>
                                        <Col>
                                            <center>
                                                <h3>Images</h3>
                                                <p>File name</p>
                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm">
                                                    Download
                                                </Button>
                                            </center>
                                        </Col>
                                    </Row>
                                    <hr className="my-4" />
                                    <Row>
                                        <Col>
                                            <center>
                                                <FormGroup>
                                                    <label>Comment</label>
                                                    <p>Comment of Faculty Coordinator</p>
                                                    <p>Comment of Faculty Coordinator</p>
                                                    <p>Comment of Faculty Coordinator</p>
                                                </FormGroup>
                                            </center>
                                        </Col>
                                    </Row>
                                    <hr className="my-4" />
                                    <Row>
                                        <Col>
                                            <center>
                                                <Button
                                                    color="success"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}>
                                                    PUBLIC
                                                </Button>
                                            </center>
                                        </Col>
                                        <Col>
                                            <center>
                                                <Button
                                                    color="secondary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}>
                                                    DECLINE
                                                </Button>
                                            </center>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ArticleDetail;
