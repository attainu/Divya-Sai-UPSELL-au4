import React from 'react';

class Pagination extends React.Component{

    render(){
        const {productsPerPage,totalProducts,paginate} = this.props;

        const pageNumbers = [];

        for(let i = 1; i<=Math.ceil(totalProducts/productsPerPage);i++){
            pageNumbers.push(i);
        }

        return(
            <nav>
                <div className="pagination">
                    {pageNumbers.map((number)=>{
                        return <li key={number} className="page-item">
                            <a onClick={()=>paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    })}
                    </div>
    
            </nav>
        )
    }


}

export default Pagination;