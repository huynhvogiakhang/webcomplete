import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container,
    Label
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";

class CoordinatorTopicUpload extends React.Component {
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
                                        <h1>Announce new Topic</h1>
                                    </center>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Please fill information for a new topic</small>
                                    </div>
                                    <Form role="form">
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>

                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Topic Name" type="text" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>

                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Topic subname" type="text" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>

                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Description" type="textarea" rows="8" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleDate">Date Start</Label>
                                            <Input
                                                type="date"
                                                name="dateStart"
                                                id="exampleDate"
                                                placeholder="date placeholder"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleDate">Date End</Label>
                                            <Input
                                                type="date"
                                                name="dateEnd"
                                                id="exampleDate"
                                                placeholder="date placeholder"
                                            />
                                        </FormGroup>
                                        <Row className="my-4">
                                            <Col xs="12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id="customCheckRegister"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheckRegister">
                                                        <span className="text-muted">
                                                            I agree with the{" "}
                                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                                Privacy Policy
                                                            </a>
                                                        </span>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center">
                                            <Button className="mt-4" color="primary" type="button">
                                                Create account
                                            </Button>
                                        </div>
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

export default CoordinatorTopicUpload;
