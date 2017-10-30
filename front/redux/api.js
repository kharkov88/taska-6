export let Api = (function(){
    const url="http://localhost:5000/get-data"
    const url_add="http://localhost:5000/add"
    const url_delete="http://localhost:5000/delete"

    let list = ()=>
    fetch(url,{})
    .then(response=>{
      return response.json()
      .then(data=>data)
    })
    .catch(e=>console.log(e))

    let remove = (id)=>
    fetch(url_delete,{
        method:"post",
        headers:{"Content-type": 'application/json; charset=utf-8'},
        body:JSON.stringify({id:id})     
    })
    .then(response=>{
      return response.json()
      .then(data=>data)
    })
    .catch(e=>console.log(e))
    
    let add = (obj)=>
    fetch(url_add,{
        method:"POST",
        headers:{"Content-type": 'application/json; charset=utf-8'},
        body:JSON.stringify(obj)
    })
    .then(response=>{
      return response.json()
      .then(data=>data)
    })
    .catch(e=>console.log(e))

    return {
        list,
        add,
        remove
    }
}())



