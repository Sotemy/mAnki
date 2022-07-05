import { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from '../features/auth/authSlice';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const user = JSON.parse(localStorage.getItem('user'))

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoaded, isSuccess, isError, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
        alert(message)
    }

    if(isSuccess || user){
        let com = (isSuccess || user === true)
        console.log(com)
        navigate('/')
    }

    dispatch(reset())

}, [user, isError, isSuccess, message, navigate, dispatch])
  

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
        [e.target.id]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(login(formData))
}

if(isLoaded){
  return (
      <div id="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      )
}

  return (
    <Container>
      <Form onSubmit={(e)=>onSubmit(e)}>
        <FormControl placeholder='E-Mail' id="email" name="email" type="email" value={formData.email} onChange={(e)=>onChange(e)} />
        <FormControl placeholder='Password' id="password" name="password" type="password" value={formData.password} onChange={(e)=>onChange(e)} />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login