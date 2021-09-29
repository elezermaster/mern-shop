import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import HamburgerMenu from './hamburgerMenu'
import {TiThMenu} from "react-icons/ti";
import styled from 'styled-components';
import {Link, withRouter, NavLink} from 'react-router-dom'

const styles = { //StyleSheet.create({
    navlinks: {
        display: 'inline-block',
        height: 20,
        backgroundColor: 'white',/*will change background-color of element */
        color: 'green',
        '&: hover': {
            backgroundColor: 'green', /*will change background-color of element on hover */
            color: 'white', /*will change color of text within the element on hover */
            }, /*will change color of text within the element */
        },
    }
const StyledNavBar = styled(HamburgerMenu)`
    color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
  `;
const DivWrapperNav = styled.div`
    .active{
        color: yellow;
    }
    .navbar-toggle-icon {
        /*background-image: url("data:image/svg+xml;");*/
        /*color: #fff;*/
    }
    .navbar-brand,
    .navbar-nav .nav-item a.nav-link,
    .navbar-default .navbar-nav > li > a{
    backgroundColor: white;
    color: green;
    &:hover {
        backgroundColor: green;
        color: red;
    }
    }
    .nav-link{
        backgroundColor: white;
        color: green;
        &:hover &:active{
            backgroundColor: green;
            color: red;
        }
    }
    .navbar-default .navbar-nav > .active > a,
    .navbar-default .navbar-nav > .active > a:hover,
    .navbar-default .navbar-nav > .active > a:focus {
        color: #FFF;
        background-color: #AA0000;
    }
`;
const StyledLink = styled(
    styled(Nav.Link)`
      color: blue;
      display: block;
      margin: 0.5em 0;
      font-family: Helvetica, Arial, sans-serif;
  
      &:hover {
        text-decoration: underline;
      }
    `,
    'active',
  )`
    color: red;
  `;
  //const isActive = this.context.router.isActive(this.props.to, true);
  //const linkClassName = isActive ? "active" : "";
    console.log('location.pathname',location.pathname)
    const pathname = location.pathname
const navBar = ({totalItems}) => {
    return (
        <DivWrapperNav>
              <Navbar
                expand="lg"
                bg="light"
                variant="light">
                <Container>
                {/* <Navbar.Brand href="/">
                    <HamburgerMenu/>
                </Navbar.Brand> */}
                <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="toggler"
                >
                <TiThMenu/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                    <Nav.Link
                            as={Link}
                            active={pathname.startsWith('/product/:id')}
                            //activeClassName="active"
                            to="/product/:id"
                            href="/product/:id"
                        >HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link
                        as={Link}
                        active={pathname.startsWith('/')}
                        //activeClassName="active"
                        href="/"
                        to="/"
                        >ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link
                        as={Link}
                        active={pathname.startsWith('/product')}
                        to="/product"
                        href="/product"
                        >PRODUCT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link
                        active={pathname.startsWith('/product/:id')}
                        to="/product/:id"
                        href="/product/:id"
                        >PRICING</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link
                        active={pathname.startsWith('/contact')}
                        href="/contact"
                        to="/contact"
                        >CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="/">SHOP</Navbar.Brand>
                {/* <Nav
                    className="me-auto"
                    //activeKey="/"
                    //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                <StyledLink
                    //style={styles.navlinks}
                    activeStyle={{
                        color: 'red',
                      }}
                    to="/"
                    href="/"
                    eventKey="link-1"
                    >Home</StyledLink>
                <StyledLink
                    //style={styles.navlinks}
                    to="/product"
                    href="/product"
                    eventKey="link-2"
                    >Products</StyledLink>
                <StyledLink
                    to="/product/:id"
                    href="/product/:id"
                    eventKey="link-3"
                    >Pricing</StyledLink>
                </Nav> */}
                <Nav.Link
                    to="/product"
                    href="/product"
                    eventKey="link-4"
                    className="position-relative"
                    >корзина
                        <Badge pill bg="secondary" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                        </Badge>
                    </Nav.Link>
                </Container>
            </Navbar>
        </DivWrapperNav>
    )
}

export default navBar
