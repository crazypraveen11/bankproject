import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState } from 'react'
import { Button, Nav, NavDropdown, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { Accountform } from './createAccountform'
// import { Viewaccountdetails } from './viewaccountdetails'
// import { Createtransactionform } from './createTransaction'
// import { Listalltransaction } from './listallTransaction'
export let Homepage = () => {
    var [createpage, setCreatepage] = useState(false);

    return (
        <>
            {
                (createpage) ?
                    <>
                        <Navbar expand='lg' variant='dark' bg='dark' style={{ width: '1340px' }}>
                            <div className='container'>
                                <NavbarBrand className='fw-bold'>Profile</NavbarBrand>
                                <NavbarToggle></NavbarToggle>
                                <NavbarCollapse>
                                    <Nav>
                                        <NavLink href='#!'>Account Details</NavLink>
                                        <NavDropdown title='Transaction Details'>
                                            <NavDropdown.Item href='#!'>New Transaction</NavDropdown.Item>
                                            <NavDropdown.Item href='#!'>Listall Transaction</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav className='ms-auto d-flex align-items-center'>
                                        <Button className='btn btn-success'>LOG OUT</Button>
                                        <Button className='btn btn-danger ms-4'>DELETE ACCOUNT</Button>
                                    </Nav>
                                </NavbarCollapse>
                            </div>
                        </Navbar>
                        <Accountform />
                        {/* <Viewaccountdetails/>
            <Createtransactionform/> 
            <Listalltransaction/>  */}
                    </>
                    :
                    <>
                        <div class="wrapper">
                            <form action="">
                                <h1 style={{ fontFamily: 'unset' }}>Login Page</h1>
                                <div class="input-box">
                                    <input type="text" placeholder="Username" required />
                                    <i class="bi bi-person-circle"></i>
                                </div>
                                <div class="input-box">
                                    <input type="password" placeholder="Password" required />
                                    <i class="bi bi-lock-fill"></i>
                                </div>
                                <div class="remember-forgot">
                                    <label className='ms-3'><input type="checkbox" />Remember Me</label>
                                    <a href="#!">Forgot Password</a>
                                </div>
                                <button type="submit" className='btn '
                                    onClick={() => {
                                        setCreatepage(true)
                                    }}
                                >Login</button>
                                <div class="register-link">
                                    <p>Don't have an account ? <a href="#!" className='ms-2'>Register</a></p>
                                </div>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}