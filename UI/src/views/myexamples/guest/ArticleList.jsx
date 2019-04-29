import React from "react";

// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    // DropdownMenu,
    // DropdownItem,
    // UncontrolledDropdown,
    // DropdownToggle,
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
                                    <h3 className="mb-0">Public Article List</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Article Name</th>
                                            <th scope="col">Student</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Faculty</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Topic 1 */}
                                        <tr>
                                            <th>1</th>
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
                                                            Article 1
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    Quoc-Anh Do
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">10-3</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">Computing</span>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <Button outline color="primary">Read</Button>
                                            </td>
                                        </tr>
                                        {/* Topic 2 */}
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
                                                            Article 2
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    Phuong Duy
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span >4-2</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span >Maths</span>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <Button outline color="primary">Read</Button>
                                            </td>
                                        </tr>
                                        {/* Topic 3 */}
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
                                                            Article 3
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <span>
                                                    Gia Khang
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span >5-4</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span >Maths</span>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <Button outline color="primary">Read</Button>
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
