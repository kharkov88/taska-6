import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import Form from "../change/change"
import {Api} from "../../redux/api"

export const ModalWindow = ({item,actions,updateItem}) => (
  <Modal trigger={<Button onClick={()=>actions.change(item)}>Редактировать</Button>}>
    <Modal.Header>Изменить</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Form 
        item={item}
        change={actions.change}
        onSubmit={updateItem}
        
        />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
)

export const ModalBasic = (props) => (
  <Modal trigger={<Button>Удалить</Button>} basic size='small'>
    <Header icon='delete' content='Delete' />
    <Modal.Content>
      <p>Вы точно хотите удалить продукт?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted as={Link} to={`${props.link}`}>
        <Icon name='remove' /> Нет
      </Button>
      <Button as={Link} to={`/магазин`}
        color='green' inverted onClick={()=>remove(props)}>
        <Icon name='checkmark' /> Да
      </Button>
    </Modal.Actions>
  </Modal>
)
function remove(props){
  let {id,update} = props
  let callback = Api.remove
  callback(id).then(()=>update())
}
