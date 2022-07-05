import { useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'

function Register() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
        [e.target.id]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
}

  return (
    <Container>
      <Form onSubmit={(e)=>onSubmit(e)}>
        <FormControl placeholder='E-Mail' id="email" name="email" type="email" value={formData.email} onChange={(e)=>onChange(e)} />
        <FormControl placeholder='Password' id="password" name="password" type="password" value={formData.password} onChange={(e)=>onChange(e)} />
        <FormControl placeholder='Password again' id="password2" name="password2" type="password" value={formData.password2} onChange={(e)=>onChange(e)} />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Register