import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Item = ({item,match,activate}) => {
  let {name} = item
  let {url} = match.match
  name = name.trim().replace(/\s/ig, '-')
  return(
  <div>
    <Comment>
      <Comment.Avatar as='a' src={item.image_url} />
      <Comment.Content>
        <Comment.Author><Link to={`${url}/${name}`} onClick={()=>activate(item.id)}>{item.name}</Link></Comment.Author>
        <Comment.Metadata>
          <div>{item.year}</div>
          <div>{item.author}</div>
          <div>
            <Icon name='star' />
            5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
          {item.except}
        </Comment.Text>
      </Comment.Content>
    </Comment>
    <hr/>
  </div>
)}

export default Item