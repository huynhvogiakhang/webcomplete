import React from "react";


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Row,
    Col,
    Jumbotron,
    Badge,

    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";

class TopicDetail extends React.Component {

    render() {
        return (
            <>
                <MyHeader />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>Topic 1</CardHeader>
                                <CardBody>
                                    <Jumbotron>
                                        <h1>Your work detail is here</h1>
                                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                        <hr className="my-2" />
                                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                        <ul>
                                            <li>Criteria 1</li>
                                            <li>Criteria 2</li>
                                            <li>Criteria 3</li>
                                            <li>Criteria 4</li>
                                            <li>Criteria 5</li>
                                        </ul>
                                    </Jumbotron>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Uploads</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                to="/upload"
                                                onClick={e => e.preventDefault()}>
                                                Upload
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">File Name</th>
                                            <th scope="col">Image Quantity</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <th scope="row">
                                                <Media className="align-items-center">

                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Topic 1
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    example.docx
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">15-3</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-primary" />
                                                    Pending
                                                </Badge>
                                            </td>
                                        </tr>
                                        {/* Upload 2 */}
                                        <tr>
                                            <th>2</th>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    {/* <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={require("assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a> */}
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Topic 2
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    coordinator@example.com
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">15-3</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-primary" />
                                                    Pending
                                                </Badge>
                                            </td>
                                        </tr>
                                        {/* Upload 3 */}
                                        <tr>
                                            <th>3</th>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    {/* <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={require("assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a> */}
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Topic 3
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    coordinator@example.com
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">22-1</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    Accepted
                                                </Badge>
                                            </td>
                                        </tr>
                                        {/* Upload 4 */}
                                        <tr>
                                            <th>4</th>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    {/* <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={require("assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a> */}
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Doc file
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    student@example.com
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">22-1</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-dark" />
                                                    Declined
                                                </Badge>
                                            </td>

                                        </tr>
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <nav aria-label="...">
                                                <Pagination
                                                    className="pagination justify-content-end mb-0"
                                                    listClassName="justify-content-end mb-0"
                                                >
                                                    <PaginationItem className="disabled">
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                            tabIndex="-1"
                                                        >
                                                            <i className="fas fa-angle-left" />
                                                            <span className="sr-only">Previous</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem className="active">
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            1
                                                </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            2 <span className="sr-only">(current)</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            3
                                                </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-angle-right" />
                                                            <span className="sr-only">Next</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </nav>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </>
        );
    }
}

export default TopicDetail;
