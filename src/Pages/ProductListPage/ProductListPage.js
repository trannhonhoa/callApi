import { Component } from 'react';
import ProductList from '../../Component/ProductList/ProductList';
import ProductItem from '../../Component/ProductItems/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as action from '../../Actions/index'
class ProductListPage extends Component {
  componentDidMount(){
    this.props.onFetchProducts();
  }
  render(){
    var {products} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">     
          <Link to="/productAdd" className="btn btn-info">Add Product</Link>
          <ProductList >
           {this.showProductItem(products)}
          </ProductList>
      </div>  
    );
  }
  showProductItem(products){
    var result = null;
    if(products.length > 0){
      result = products.map((product, index) =>{
        return <ProductItem key={index} product={product} index={index} />
      })
    }
    return result;
  }
}
const mapStateToProps = (state) =>{
  return{
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    //when
    onFetchProducts: ()=>{
      dispatch(action.actFetchProductsRequest())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);





// import { Component } from 'react';
// import ProductList from '../../Component/ProductList/ProductList';
// import ProductItem from '../../Component/ProductItems/ProductItem'
// import {connect} from 'react-redux';  
// import {Link} from 'react-router-dom'
// import * as action from '../../Actions/index';
// class ProductListPage extends Component {

//   componentDidMount(){
//     this.props.fethAllProducts();
//   }
  
//   onDelete = (id) =>{
  
//   this.props.onDelete(id);

//   }
//   render(){
//     var {products} = this.props;
//     return (
//       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    
//           <Link to="/product/add" className="btn btn-info">Add Product</Link>
//           <ProductList >
//             {this.showProductItem(products)}
//           </ProductList>
//       </div>  
//     );
//   }
//   showProductItem = (products) =>{
//     var result = null;
//     if(products.length > 0){
//       result = products.map((product, index)=>{
//         return <ProductItem
//                 key={index} product={product} index={index}
//                 onDelete={this.onDelete}
//         />
//       })
//     }
//     return result;
//   }
// }
// const mapStateToProps = (state) =>{
//   return{
//     products: state.products
//   }
// }
// const mapDispatchToProps = (dispacth) =>{
//   return{
//     fethAllProducts: () =>{
//       dispacth(action.actFetchProductsRequest())
//     },
//     onDelete: (id) =>{
//       dispacth(action.actDeleteProductsRequest(id))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);