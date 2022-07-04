import React from 'react'

import { Container, Form, Button } from "react-bootstrap"
import { RiLoginBoxLine } from "react-icons/ri";
import { toast } from 'react-toastify';

function Register() {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        password2: ''
    })

    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState, 
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (data.password.length < 5){
            return toast.error('Too short password', {
                position: "top-center",
                autoClose: 5000,
                // hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
                });
        }

        if (data.password !== data.password2){
            return toast.error('Passwords are not equal', {
                position: "top-center",
                autoClose: 5000,
                // hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
                });
        }

        alert(data)
        console.log(data)
    }

    return (
        <Container>

            <div id="holder">
                <h1><RiLoginBoxLine /> Login</h1>
                Please log in to proceed
            </div>

            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={e => onChange(e)} 
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Password" 
                        onChange={e => onChange(e)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password again</Form.Label>
                    <Form.Control 
                        type="password" 
                        id="password2"
                        name="password2"
                        placeholder="Password again" 
                        onChange={e => onChange(e)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Register;