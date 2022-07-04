import {ListGroup} from "react-bootstrap"

function StackItem(props) {
  return (
        <ListGroup.Item>{props.item.title}</ListGroup.Item>
  )
}

export default StackItem