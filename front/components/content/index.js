import React from 'react';
import {Route} from "react-router-dom";

import "./content.css"
import {ModalWindow,ModalBasic} from "../modal"
import ReduxForm from "../add"
import List from "../list"
import {Api} from "../../redux/api"

export default  ({activeID,list,actions})=>{
    const {addItem} = actions 
    let showResults =  function (values) {
        Api.add(values).then(()=>actions.getList())
    };
    let updateResult =  function (values) {
        actions.updateItem(values)
    };
    return(
        <div className="content">
            <Route exact path="/" component={About}/>
            <Route exact path={`/магазин`} component={(match)=><List match={match} list={list} actions={actions}/>}/>
            <Route 
                path={`/магазин/:productId`}
                component={(match)=>(
                    <Product 
                        match={match}
                        list={list}
                        activeID={activeID}
                        actions={actions}
                        updateResult={updateResult}
                    />)}
            />
            <Route path={`/добавить`} component={()=><ReduxForm onSubmit={showResults} />}/>
        </div>
    )}

    const Product = (props) => {
        const {list,match,activeID,actions,updateResult } = props
        const item = list.filter(item=>item.id==activeID)
        const {name,author,content,image_url} = item[0]
        const {url} = match.match
        return(
            <div>
                <img src={image_url}/>
                <h3>{name}</h3>
                <p>{author}</p>
                <p>{content}</p>
                <ModalWindow 
                    item={item}
                    actions={actions}
                    updateItem={updateResult}
                />
                <ModalBasic 
                    id={activeID}
                    update={actions.getList}
                    link={url}
                />
            </div>
      )
    }
      
const About = ()=>(
    <p>Жми магазин и выбирай продукт :)</p>
)

    