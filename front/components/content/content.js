import React from 'react';
import List from "../list/list"
import {Route} from "react-router-dom";
import "./content.css"
import {ModalWindow,ModalBasic} from "../modal"
import ReduxForm from "../add/add"
import {Api} from "../../redux/api"

export let Content = ({activeID,list,actions})=>{
    const {addItem} = actions
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    let showResults =  (function showResults(values) {
        Api.add(values).then(()=>actions.getList())
    });
    return(
        <div className="content">
            <Route exact path="/" component={()=><p>About</p>}/>
            <Route exact path={`/магазин`} component={(match)=><List match={match} list={list} actions={actions}/>}/>
            <Route path={`/магазин/:productId`} component={(match)=><Product match={match} list={list} activeID={activeID} actions={actions}/>}/>
            <Route path={`/добавить`} component={()=><ReduxForm onSubmit={showResults} />}/>
        </div>
    )}

    const Product = (props) => {
        const {list,match,activeID,actions } = props
        const item = list.filter(item=>item.id==activeID)
        const {name,author,content,image_url} = item[0]
        const {url} = match.match
        return(
            <div>
                <img src={image_url}/>
                <h3>{name}</h3>
                <p>{author}</p>
                <p>{content}</p>
                <ModalWindow item={item}/>
                <ModalBasic id={activeID} update={actions.getList} link={url} />
            </div>
      )
    }
      

    