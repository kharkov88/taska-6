import React from 'react'
import Item from "./item"
import { Comment} from 'semantic-ui-react'

class List extends React.Component{ 
    render(){
    const {list,match,actions} = this.props
    return(
        <div>
        <Comment.Group>
            {
                list.map((item,index)=>{
                    return <Item key={index} match={match} item={item} activate={actions.getActiveItem}/>
                })
            }
        </Comment.Group>
        </div>
    )
}}
export default List
