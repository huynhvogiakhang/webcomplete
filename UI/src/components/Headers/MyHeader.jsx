import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class MyHeader extends React.Component {
    render() {
        return (
            <>
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                    <Container fluid>
                        <div className="header-body">
                            {/* Card stats */}

                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default MyHeader;