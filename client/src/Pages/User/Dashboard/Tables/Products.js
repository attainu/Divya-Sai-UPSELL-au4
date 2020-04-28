import React from "react";

const Products = (props) => {
  return (
    <div>
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
						<h2>Manage <b>Products</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" data-toggle="modal" style={{"padding-right":"10px"}}><i class="material-icons">&#xE147;</i><span style={{"vertical-align":"top"}}>Add New Product</span></a>
						<a href="#deleteEmployeeModal" data-toggle="modal"><i class="material-icons">&#xE15C;</i><span style={{"vertical-align":"top"}}>Delete</span></a>						
					</div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll" />
								<label for="selectAll"></label>
							</span>
						</th>
                        <th>Id</th>
                        <th>Title</th>
						<th>Category</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
             
                        
                    {props.Products.map((product)=>{
                            return (<tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                    <label for="checkbox1"></label>
                                </span>
                            </td>
                            <td>{product.product_id}</td>
                            <td>{product.product_title}</td>
                            <td>{product.category_name}</td>
                            <td>{product.product_image}</td>
                            <td>{product.product_price}</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                            )
                    })}					
					
                </tbody>
            </table>
        </div>
        </div>
   
 
  );
};
export default Products;
