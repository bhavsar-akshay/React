import React, { Component } from 'react'
import fetchProductsService from '../../../Services/fetchProductsService';
import axios from 'axios'

export class ProductsShelf extends Component {

    componentDidMount(){
            console.log(fetchProductsService);

            axios.get("http://localhost:8001/api/products")
            .then( res => {   
                console.log(res)   
                this.list = res.data; 
                return res.data;
            })
            .catch(err => {
                console.log(err)
            })


        console.log(list);
    }
    
    render() {
        
        return (
            <div>
                Produc Shelf
            </div>
        )
    }
}

export default ProductsShelf
