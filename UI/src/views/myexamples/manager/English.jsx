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
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Badge
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";

class English extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <>
                <MyHeader />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col>
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h1 className="mb-0">Faculty of English</h1>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Date Accepted</th>
                                            <th scope="col">With Image</th>
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
                                                            Tang Quang
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    1-3-2019
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">
                                                        Yes
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    Declined
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button color="primary" >
                                                    Detail
                                                </Button>
                                            </td>
                                        </tr>
                                        {/* Upload 2 */}
                                        <tr>
                                            <th>2</th>
                                            <th scope="row">
                                                <Media className="align-items-center">

                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Tri Duc
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    12-3-2019
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">
                                                        No
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-primary" />
                                                    Pending
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button color="primary" >
                                                    Detail
                                                </Button>
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

export default English;
