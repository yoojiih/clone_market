import React from 'react'
import '../../index.css';
import logo from './당근마켓logo.svg';

// bootstrap 1 - npm install react-bootstrap bootstrap @version
// https://react-bootstrap.github.io/getting-started/introduction/
// bootstrap 2 - public>index.html></head>태그 앞에 css <link rel...> 붙여넣음
// bootstrap 3 - https://react-bootstrap.github.io/components/navbar/ 여기서 -> Scrolling
// bootstrap 4 - import 
// bootstrap 5 - npm i bootstrap-icons 
import { Navbar,Container,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap'; 

function NavBar() {
    return (
        <div>
            <Navbar bg="#ffffff" expand="lg" className="navbar_wrapper">
                <Container fluid className="nav_container">
                    <Navbar.Brand href="/" className="logo_image"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="동네 이름, 물품명 등을 검색해보세요!"
                        className="me-2"
                        aria-label="Search"
                        >
                        </FormControl>
                        <Button variant="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </Button>
                        
                    </Form>
                        <NavDropdown title="다운로드" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-secondary" className="chat-button"><span className="button-text">당근채팅</span><span className="button-beta">Beta</span></Button>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default NavBar
