import { Image, Nav, Navbar, NavDropdown, Table, Carousel, Button, ButtonGroup, Stack, Container } from "react-bootstrap";
import { BoxArrowRight, House, InfoCircle, Person, Gear } from 'react-bootstrap-icons';
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Expense Tracker';
    }, []);

    return (
        <Container
            fluid
            className="
                d-flex
                flex-column
                justify-content-between
                align-items-center
                bg-dark
                min-vh-100
                px-3"
        >
            {/* User and logout button */}
            <Navbar
                expand="lg"
                className="
                    bg-dark
                    navbar-custom
                    min-vw-100
                    p-4"
            >
                <Navbar.Brand href="#home">
                    <Image
                        alt=""
                        src="/devmtn.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        roundedCircle
                    />
                    <span className="ms-2">Username</span>
                </Navbar.Brand>
                <Button
                    variant="dark"
                    className="
                        icon-button
                        p-1"
                >
                    <BoxArrowRight size={24} />
                </Button>
            </Navbar>
            {/* Credit card image */}
            <Carousel
                data-bs-theme="dark"
                className="
                    d-flex
                    min-vw-100
                    px-4
                    pb-4"
            >{/*TODO: fix item size*/}
                <Carousel.Item>
                    <Container
                        fluid
                        className="
                            d-flex
                            justify-content-center
                            align-items-center
                        "
                    >
                        <Image
                            src="https://placehold.co/300x185.png"
                            alt="Placeholder"
                            rounded
                        />
                    </Container>
                        <Carousel.Caption>
                            <h3 style={{ color: "black" }}>First slide label</h3>
                            <p style={{ color: "black" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Table */}
            <Container
                fluid
                className="
                    flex-grow-1
                    pb-4"
            >
                <Table bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            {/* Navigation Bar */}
            <Container
                fluid
                className="
                    pb-2"
            >
                <ButtonGroup className="d-flex justify-content-center mb-3">
                    <Button variant="dark" href="/home" className="icon-button">
                        <House size={24} />
                    </Button>
                    <Button variant="dark" href="/about" className="icon-button">
                        <InfoCircle size={24} />
                    </Button>
                    <Button variant="dark" href="/profile" className="icon-button">
                        <Person size={24} />
                    </Button>
                    <Button variant="dark" href="/settings" className="icon-button">
                        <Gear size={24} />
                    </Button>
                </ButtonGroup>
            </Container>
        </Container>
    );
};

export default HomePage;