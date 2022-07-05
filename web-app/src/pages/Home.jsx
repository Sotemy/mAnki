import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ListGroup, Container } from "react-bootstrap"

import BB from '../components/BB'
import { getData } from "../features/app/appSlice"
import Spinn from '../components/Spinn';
import StackItem from '../components/StackItem';

function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { app, isLoading, isError, message } = useSelector( (state) => state.app)

  useEffect(() => {

    if(isError){
      return toast.error(message)
    }

    if (!user){
      return navigate('/login')
    }

    dispatch(getData())

    // return () =>
    // dispatch(reset())

  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinn/>
  }

  return (
    <>
        <div>Home</div>
        <div>
        {
        app !== undefined ? (
          <Container>
            <ListGroup variant="flush">
              {app.map(stack=><StackItem item={stack}/>)}
            </ListGroup>
          </Container>
        ) : (
          <div></div>
        )
        }
        </div>
        <BB />
    </>
  )
}

export default Home