import React from "react";

// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    // UncontrolledTooltip,
    Col, Button
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";

class MyUploadList extends React.Component {
    render() {
        return (
            <>
                <MyHeader />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <Col xs="12" md={{ size: 8, offset: 2 }}>
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Topic List</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                to="/coordinator/upload-topic"
                                                onClick={e => e.preventDefault()}>
                                                Add
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Topic Name</th>
                                            <th scope="col">Upload Quantity</th>
                                            <th scope="col">Closure Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Topic 1 */}
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
                                                    2
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">10-3</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="60"
                                                            barClassName="bg-warning"
                                                        />
                                                    </div>
                                                    <span> 10-4</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    Available
                                                </Badge>
                                            </td>
                                            <td className="text-right">
                                                <Button outline color="primary">Modify</Button>
                                            </td>
                                        </tr>
                                        {/* Topic 2 */}
                                        <tr>
                                            <th>2</th>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Topic 2
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    0
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">15-3</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="25"
                                                            barClassName="bg-success"
                                                        />
                                                    </div>
                                                    <span >15-4</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    Available
                                                </Badge>
                                            </td>
                                            <td className="text-right">
                                                <Button outline color="primary">Modify</Button>
                                            </td>
                                        </tr>
                                        {/* Topic 3 */}
                                        <tr>
                                            <th>3</th>
                                            <th scope="row">
                                                <Media className="align-items-center">

                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Topic 3
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    15
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">22-1</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="100"
                                                            barClassName="bg-dark"
                                                        />
                                                    </div>
                                                    <span > 1-2</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-dark" />
                                                    Unavailable
                                                </Badge>
                                            </td>
                                            <td className="text-right">
                                                <Button color="primary" disabled>Modify</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
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
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MyUploadList;
