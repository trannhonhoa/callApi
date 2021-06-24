import { Component } from 'react';
import {connect} from 'react-redux'; 
import {Link} from 'react-router-dom'
import * as action from '../../Actions/index';
class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'', txtName:'', txtPrice:'', checkStatus:''
    }
  }
  onChange = (e) =>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value 
    })
  }
  componentDidMount(){
    var {match} = this.props;
    if(match){
      var {id} = match.params
      this.props.onEditProducts(id);
    }
  }
  componentWillReceiveProps(nextprops){
    if(nextprops && nextprops.itemEditing){
      this.setState({
        id: nextprops.itemEditing.id,
        txtName: nextprops.itemEditing.name,
        txtPrice: nextprops.itemEditing.price,
        checkStatus: nextprops.itemEditing.status
      })
    }
  }
  onSubmit = (e) =>{
    e.preventDefault();
    var {history} = this.props;
    var {id, txtName, txtPrice, checkStatus} = this.state
    var product ={
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus
    }
    if(id){
      this.props.onUpdateProducts(product)
    }
    else{
      this.props.onAddProducts(product);
    }
    history.goBack();
  }
  render(){
    var {txtName, txtPrice, checkStatus} = this.state; 
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control"
                name="txtName" onChange={this.onChange} value={txtName}/>
              </div>
            
              <div className="form-group">
                <label>Price:</label>
                <input type="number" className="form-control" 
                name="txtPrice" onChange={this.onChange} value={txtPrice} />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" 
                    checked={checkStatus}
                    name="checkStatus" onChange={this.onChange} value={checkStatus} />
                    Still
                  </label>
                </div>
                
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
              <Link to='/product-list' className="btn btn-danger">Back</Link>
            </form>
      </div>  
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    itemEditing : state.itemEditing
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onAddProducts: (product)=>{
      dispatch(action.actAddProductsRequest(product))
    },
    onEditProducts: (id)=>{
      dispatch(action.actEditProductsRequest(id))
    },
    onUpdateProducts: (product)=>{
      dispatch(action.actUpdateProductsRequest(product))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);


// import { Component } from 'react';
// import {Link} from 'react-router-dom'
// import {connect} from "react-redux";
// import * as action from '../../Actions/index'
// class ProductActionPage extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//         id:'' ,txtName: '', txtPrice:'', checkStatus:''
//     }
//   }
//   componentDidMount(){
//     var {match} = this.props;
//     if(match){
//       var id = match.params.id;
//       this.props.onEditProduct(id);
//     }
//   }
//   componentWillReceiveProps(nextprops){ // neu nhu co props nhan tu itemedting moi nhan duoc ham nay
//     if(nextprops && nextprops.itemEditing){
//       this.setState({
//         id: nextprops.itemEditing.id,
//         txtName: nextprops.itemEditing.name,
//         txtPrice: nextprops.itemEditing.price,
//         checkStatus: nextprops.itemEditing.status
//       })
//     }
//   }
//   onChange = (e) =>{
//     var target = e.target;
//     var name = target.name;
//     var value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//       [name]: value
//     })
//   }
//   onSave = (e) =>{
//     e.preventDefault();
//     console.log(this.state);
//     var {history} = this.props;
//     var {id, txtName, txtPrice, checkStatus} = this.state;
//     var product = {
//       id: id,
//       name: txtName, 
//       price: txtPrice,
//       status: checkStatus
//     }
//     if(id){
//       this.props.onUpdateProduct(product);
//     }
//     else{
//       this.props.onAddProduct(product);
//     }
//     history.goBack();
//   }
//   render(){
//     var {txtName, txtPrice, checkStatus}= this.state;
//     return (
//       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//             <form onSubmit={this.onSave}>
//               <div className="form-group">
//                 <label>Name:</label>
//                 <input type="text" className="form-control" name="txtName" 
//                 value={txtName}
//                 onChange={this.onChange} />
//               </div>
            
//               <div className="form-group">
//                 <label>Price:</label>
//                 <input type="number" className="form-control"  name="txtPrice" 
//                 value={txtPrice}
//                 onChange={this.onChange} />
//               </div>
//               <div className="form-group">
//                 <label>Status:</label>
//                 <div className="checkbox">
//                   <label>
//                     <input type="checkbox"  name="checkStatus" checked={checkStatus}
//                     value={checkStatus}
//                     onChange={this.onChange}/>
//                     Still
//                   </label>
//                 </div>
                
//               </div>

//               <button type="submit" className="btn btn-primary">Save</button>
//               <Link to="/product-list" className="btn btn-danger">Back</Link>
//             </form>
//       </div>  
//     );
//   }
// }
// const mapStateToProps = (state) =>{
//   return{
//     itemEditing: state.itemEditing
//   }
// }
// const mapDispatchToProps = (dispatch) =>{
//   return{
//     onAddProduct: (product) =>{
//       dispatch(action.actAddProductsRequest(product))
//     },
//     onEditProduct: (id) =>{
//       dispatch(action.actGetProductsRequest(id))
//     },
//     onUpdateProduct: (product) =>{
//       dispatch(action.actUpdateProductsRequest(product))
//     }
//   }
// }
// export default (connect)(mapStateToProps, mapDispatchToProps)(ProductActionPage);