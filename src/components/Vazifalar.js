import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Tab1 from "./Tab1";

class Vazifalar extends Component {
    state={
        activeTab:'1'
    };
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };
    render() {
        const {activeTab}=this.state;
        return (
            <div className={'bg-dark d-flex'}>
                <div className="col-md-12 text-center">
                    <h2 className={'mb-3'}>Vazifalar va chat</h2>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                onClick={() => { this.changeTab('1'); }}
                            >
                                Vazifalar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => { this.changeTab('2'); }}
                            >
                                Chats
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col>
                                    <Tab1/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col>
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                </div>
            </div>
        );
    }
}

export default Vazifalar;