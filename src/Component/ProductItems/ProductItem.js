import { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as action from  '../../Actions/index';
class ProductItem extends Component {
  onClick = (id) =>{
    if(confirm("Are you Sure Delete ?")){ //eslint-disable-line
      this.props.onDelete(id); 
    } 
  }
  render(){
    var {product, index} = this.props;
    var statusName = product.status ? 'Still' : 'Out of Item'
    var statusClass = product.status ? 'warning' :'danger';
    return (
        <tr>
            <td>{index}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
            <span className={`label label-${statusClass}`}>{statusName}</span>
            </td>
            <td>
                
                <Link to={`product/${product.id}/edit`}  className="btn btn-success">Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => this.onClick(product.id)}>Delete</button>
                
            </td>
        </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onDelete: (id)=>{
      dispatch(action.actDeleteProductsRequest(id))
    }
  }
}
export default connect(null,mapDispatchToProps)(ProductItem);




// import { Component } from 'react';
// import { Link } from 'react-router-dom';
// class ProductItem extends Component {
//   onDelete = (id) =>{
//     if(confirm("Are you sure delete this product !")) { //eslint-disable-line

//       this.props.onDelete(id);
//     }
//   }
//   render(){
//     var {product, index} = this.props;
//     var statusName = product.status ? 'Still' : 'Out of Item';
//     var statusLabel = product.status ? 'warning' : 'default'
//     return (
//         <tr>
//             <td>{index + 1}</td>
//             <td>{product.id}</td>
//             <td>{product.name}</td>
//             <td>{product.price}</td>
//             <td>
//             <span className={`label label-${statusLabel}`}>{statusName}</span>
//             </td>
//             <td>
                
//                 <Link to={`/product/${product.id}/edit`}  className="btn btn-success"
//                 >Edit</Link>
//                 <button type="button" className="btn btn-danger"
//                 onClick={()=> this.onDelete(product.id)}
//                 >Delete</button>
                
//             </td>
//         </tr>
//     );
//   }
// }

// export default ProductItem;
