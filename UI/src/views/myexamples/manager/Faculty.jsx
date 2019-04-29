import React from "react";
// reactstrap components
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container
} from "reactstrap";
// core components
import MyHeader from "components/Headers/MyHeader.jsx";
import classnames from 'classnames';

class Faculty extends React.Component {
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
                        <Col >
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        color="primary"
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        Tab1
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        color="primary"
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}>
                                        More Tabs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="6">
                                            <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="6">
                                            <Card body>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>

                    </Row>
                </Container>
            </>
        );
    }
}

export default Faculty;
