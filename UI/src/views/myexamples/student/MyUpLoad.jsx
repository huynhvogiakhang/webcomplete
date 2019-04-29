import React from "react";


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormText,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";

class MyUpload extends React.Component {

    render() {
        return (
            <>
                <MyHeader />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col></Col>
                        <Col >
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Upload</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                to="/admin/tables"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                List Uploads
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <h6 className="heading-small text-muted mb-4">
                                            File Uploads
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="6">
                                                    <Card fluid>
                                                        <CardHeader>
                                                            <Row className="align-items-center">
                                                                <label className="mb-0">Upload your .doc file</label>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <Input type="file" name="file" />
                                                            <FormText color="muted">
                                                                Please choose your .doc file or .docx. The limitation is 20MB.
                                                            </FormText>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col lg="6">
                                                    <Card fluid>
                                                        <CardHeader>
                                                            <Row className="align-items-center">
                                                                <label className="mb-0">Upload your image</label>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <Input color="primary" type="file" name="file" id="exampleFile" />
                                                            <FormText color="muted">
                                                                Please choose your image. The limitation is 20MB.
                                                            </FormText>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                        <hr className="my-4" />
                                        <Row>
                                            <Col></Col>
                                            <Col>
                                                <Button color="primary">Upload</Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </Form>
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

export default MyUpload;
