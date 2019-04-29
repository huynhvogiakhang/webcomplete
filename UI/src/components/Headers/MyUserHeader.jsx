import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class MyUserHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/my-profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Hello Quoc-Anh</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can choose to update your information.
                </p>
                {/* <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit profile
                </Button> */}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default MyUserHeader;
