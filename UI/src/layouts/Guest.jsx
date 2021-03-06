import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import MySharedFooter from "components/Footers/MySharedFooter.jsx";
import MySideBar from "../components/Sidebar/MySideBar";

import routes from '../myRoutes/guestRoutes';
import GuestNavbar from "../components/Navbars/GuestNavbar";
import Body from "../views/myexamples/guest/Body";

class Guest extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/guest") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    render() {
        return (
            <>
                <MySideBar
                    {...this.props}
                    routes={routes}
                    logo={{
                        innerLink: "/guest/index",
                        imgSrc: require("assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <GuestNavbar
                        {...this.props}
                        brandText={this.getBrandText(this.props.location.pathname)}
                    />
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Container fluid>
                        <MySharedFooter />
                    </Container>
                </div>
            </>
        );
    }
}

export default Guest;
