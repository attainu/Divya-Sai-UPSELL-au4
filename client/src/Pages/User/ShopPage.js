import React, { Component } from 'react';
import Banner from '../../Components/Banner';
import ProductList from '../../Components/ProductList';
import Pagination from '../../Components/Pagination';

import Filter from '../../Components/Filter';

import {connect} from 'react-redux';

import {FILTER_BY_CATEGORY_METHOD} from './../../Redux/Product/ProductActions';



class ShopPage extends Component {

    
        state = {
            pricevalue:0,
            selectedCategory:[],


            currentPage:1,
            productsPerPage:8
            
        }     
           
    componentDidUpdate(prevProps,prevState){
        if(prevState!==this.state){
            this.props.FILTER_BY_CATEGORY_METHOD(this.state.selectedCategory,this.state.pricevalue);
        }  
    }
    

    render () {

        const IndexOfLastProduct = this.state.currentPage * this.state.productsPerPage;
        const IndexofFirstProduct = IndexOfLastProduct - this.state.productsPerPage;
        const currentProducts = this.props.products.slice(IndexofFirstProduct, IndexOfLastProduct);
        const currentfilteredProducts = this.props.filtered.slice(IndexofFirstProduct, IndexOfLastProduct);

        const paginate = (pageNumber) =>{
            this.setState({
                currentPage:pageNumber
            })
        }
        return (
            <React.Fragment>
                <Banner imgName="shoppagebanner.jpg"/>
                <div className="container shop-wrapper">
                    <div className="filter-sidebar">

                    <Filter title="Price"/>
                    
                    <input class="range-slider" type="range" min="0" max="2000" step="200"value={this.state.pricevalue}
                    onChange={(event)=>{
                        this.setState({
                        pricevalue:event.target.value,
                        currentPage:1
                    });
                    
                    }}/>
                    <label>Value: {this.state.pricevalue}</label>

                    <Filter title="Category"/>
                    

                    {this.props.categories.map((category,index)=>{
                        return (
                        
                        <div className="checkbox">
                           <label> <input type="checkbox" value={category.category_name}  key={index}

                            onClick={()=>{
                                
                                if(category.isChecked){
                                  
                                    category.isChecked=false;
                                    let newCategory = category.category_name;
                                    let arrSelectedCategory = this.state.selectedCategory.slice();
                                    let index = arrSelectedCategory.indexOf(newCategory);
                                    arrSelectedCategory.splice(index,1);
                                    this.setState({
                                        selectedCategory:arrSelectedCategory,
                                        currentPage:1
                                    });
                                     
                                }
                                else{
                                        
                                        category.isChecked=true;
                                        let newCategory = category.category_name;
                                        let arrSelectedCategory = this.state.selectedCategory.slice();
                                        arrSelectedCategory.push(newCategory);
                                        this.setState({
                                            selectedCategory:arrSelectedCategory,
                                            currentPage:1
                                        });
                                        
    
                                }
                                
                            }}

                            />
                            {category.category_name}
                            </label>
                            </div>
                       
                        )})
                    }

                    
                    </div>
                    <div className="product-wrapper">
                    {(this.state.pricevalue==0 && this.state.selectedCategory.length===0)
                     && <div>
                     <ProductList products={currentProducts} /> 
                     <Pagination productsPerPage={this.state.productsPerPage}
                     totalProducts={this.props.products.length} paginate={paginate} />
                     </div>
                    }
                    

                    {(this.state.pricevalue!==0 || this.state.selectedCategory.length!==0)
                     &&
                     <div>
                     <ProductList products={currentfilteredProducts}/>
                     <Pagination productsPerPage={this.state.productsPerPage}
                     totalProducts={this.props.filtered.length} paginate={paginate}
                     />
                     </div>
                     }

                     

                    </div>
                  

                </div>
                
            </React.Fragment>
        )
    }
}

let mapStatetoProps = (state)=>{
    return{
        categories:state.categoryReducer.categories,
        products:state.productReducer.products,
        filtered:state.productReducer.FilteredProducts
    }
}

let mapDispatchtoProps = {
    
    FILTER_BY_CATEGORY_METHOD
}



export default connect(mapStatetoProps, mapDispatchtoProps)(ShopPage);