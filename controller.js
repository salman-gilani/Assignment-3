const express = require('express')
const app = express()
const products =["Laptop","LCD","Mobile"]

const create = function (nprod){
    
    products.push(nprod)

}


const update = function (num,updated){
    
    products[num] = updated

}

const del = function (){
    
    products.pop()   

}
 function get(){
    
    return products;  

}

function getbyid(id){
    
    return products[id];  

}



module.exports ={
    get,products,del,update,create,getbyid
}

