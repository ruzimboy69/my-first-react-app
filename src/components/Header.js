import React, {Component} from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu,
    DropdownItem, Collapse, Button, CardBody, Card,
    Modal, ModalHeader, ModalBody, ModalFooter,
    TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText, Row, Col
} from 'reactstrap/es/index';

class Header extends Component {

    state = {
        dropdownState: false,
        collapseState: false,
        modalState: false,
        activeTab:'1'
    };
    changeDropdown = () => {
        this.setState({
            dropdownState: !this.state.dropdownState
        })
    };

    changeCollapse = () => {
        this.setState({
            collapseState: !this.state.collapseState
        })
    };

    changeModal = () => {
        this.setState({
            modalState: !this.state.modalState
        })
    };

    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };


    render() {
        const {dropdownState, collapseState, modalState,activeTab} = this.state;

        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-dark text-white text-center">
                                    <h4>My card</h4>
                                </div>
                                <div className="card-body">
                                    <img src="images/img.jpg" className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <Dropdown isOpen={dropdownState} toggle={this.changeDropdown}>
                                <DropdownToggle caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>Some Action</DropdownItem>
                                    <DropdownItem text>Dropdown Item Text</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                        <div className="col-md-4">
                            <Button color="primary" onClick={this.changeCollapse}>Toggle</Button>
                            <Collapse isOpen={collapseState}>
                                <Card>
                                    <CardBody>
                                        Anim pariatur cliche reprehenderit,
                                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                                        nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-4">
                            <Button color="danger" onClick={this.changeModal}>open Modal</Button>
                            <Modal isOpen={modalState} toggle={this.changeModal}>
                                <ModalHeader toggle={this.changeModal}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.changeModal}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.changeModal}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>


                        <div className="col-md-8">

                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        onClick={() => { this.changeTab('1'); }}
                                    >
                                        Tab1
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        onClick={() => { this.changeTab('2'); }}
                                    >
                                        More Tabs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        onClick={() => { this.changeTab('3'); }}
                                    >
                                        More Tabs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
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
                                <TabPane tabId="3">
                                    <Row>
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

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;