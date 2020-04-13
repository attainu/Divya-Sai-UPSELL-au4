import React, { Component } from 'react';
import {FILTER_BY_CATEGORY_METHOD} from '../Redux/Product/ProductActions'
import {connect} from 'react-redux';


class CheckBox extends Component {
    
    render () {
        const {data, FILTER_BY_CATEGORY_METHOD} = this.props;
        return (
            
                <div class="checkbox">
                        <label><input type="checkbox"  
                            // onClick={()=>{
                            // if(data.isChecked){
                            //     data.isChecked=false;
                            //     FILTER_BY_CATEGORY_METHOD("false");
                                
                            // }
                            // else{
                            //         data.isChecked=true;
                            //         FILTER_BY_CATEGORY_METHOD(data.category_name, undefined)

                            // }
                            
                            //console.log("filtered call")
                           
                            
                            //}} 
                            
                            />
                         {data.category_name} </label>
                </div>
           
        )
    }
}


let mapDispatchtoProps = {
    FILTER_BY_CATEGORY_METHOD
}


export default connect(null, mapDispatchtoProps) (CheckBox);