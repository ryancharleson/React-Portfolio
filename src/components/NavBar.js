import { Container, Navbar } from "react-bootstrap"









export const NavBar = () => {

    return (
        <NavBar>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    
                </Navbar.Collapse>
            </Container>
        </NavBar> 
    )

}