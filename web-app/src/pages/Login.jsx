import { useState, useEffect } from 'react'
import { Container, Form, Button } from "react-bootstrap"
import { RiLoginBoxLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login, reset } from "../features/auth/authSlice";
import Spinn from "../components/Spinn";

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = data;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState, 
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

            const userData = {
            email, 
            password
        }

        dispatch(login(userData))
        
    }

    if(isLoading){
        return (
            <div id="spinner-container">
                <Spinn />
            </div>
            )
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

export default Login;