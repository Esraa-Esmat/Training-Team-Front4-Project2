import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setActiveLink } from '../../../../Redux/Reducers/AdminSlice'

const AddUser = () => {
    const dispatch = useDispatch()
    const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    const handleBtn = () => {
        dispatch(setActiveLink('all users'))
    }
    return (
        <div className={`container px-5 pb-4 rounded-bottom-5 ${toggleDark ? 'bg-dark text-light' : ''}`} style={{ borderTop: "2px solid rgb(236, 236, 236)" }}>
            <Row className="py-2 px-3 mt-3 rounded border rounded-4">
                <Col md={12}>
                    <Form className="mx-4 mt-4 py-2">
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control type="email" placeholder="Type your email" className='rounded-3 border border-2' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Type your username" className='rounded-3 border border-2' />
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="*************" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formRepeatPassword">
                                <Form.Label>Repeat Password</Form.Label>
                                <Form.Control type="password" placeholder="*************" />
                            </Form.Group>
                        </Row>

                        <div className="text-end mt-5">
                            <Link to='/useradmindashboard' onClick={handleBtn} className="btn btn-danger mx-2 px-5 text-decoration-none" style={{ borderRadius: "35px", fontSize: "20px" }}>Cancel</Link>
                            <Link to='/useradmindashboard' onClick={handleBtn} className="btn btn-primary mx-2 px-5 text-decoration-none" style={{ borderRadius: "35px", fontSize: "20px" }}>create user</Link>
                        </div>
                    </Form>
                </Col>

            </Row>
        </div>)
}

export default AddUser