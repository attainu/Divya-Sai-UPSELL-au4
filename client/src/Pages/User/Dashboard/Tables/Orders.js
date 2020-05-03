import React from "react";

const Orders = (props) => {
  return (
    <div>
        {/* <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
						<h2>Manage <b>Orders</b></h2>
					</div>
					<div class="col-sm-6">
												
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
                        <th>Order Id</th>
                        <th>Product Title</th>
						<th>Product Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                    <label for="checkbox1"></label>
                                </span>
                            </td>
                            <td>1</td>
                            <td>Wedding Cakes</td>
                            <td>false</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                    {props.Orders.map((category)=>{
                            return (<tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                    <label for="checkbox1"></label>
                                </span>
                            </td>
                            <td>1{category.category_id}</td>
                            <td>Wedding Cakes{category.category_name}</td>
                            <td>false{category.isChecked}</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                            )
                    })}
                    
                    
                    					
					
                </tbody>
            </table>
        </div> */}
        </div>
   
 
  );
};
export default Orders;
