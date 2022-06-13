import React,{Component} from 'react'
import Product from './Product'
import Title from './title';
import {storeProducts} from '../data'
import {ProductConsumer} from './context'
class Productlist extends Component{
    state={
        products:storeProducts
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Electronic " title="Products (Mobiles)"/>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                 
                                    return value.products.map(product=>{
                                        return <Product key={product.id} product={product}
                                        />
                                    })
                                }}
                            </ProductConsumer>

                        </div>
                    </div>
                </div>
                </React.Fragment>
            
               
           
            
        );
    }
}
export default Productlist;