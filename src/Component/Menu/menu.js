import { Component } from 'react';
import {Link} from 'react-router-dom';
class menu extends Component {
  render(){
    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand" href="/">Shop</a>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product-list">Product</Link>
                </li>
            </ul>  
        </div>   
    );
  }
}

export default menu;




// import { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
// const menus =[
//     {
//         name: "Home",
//         to:'/',
//         exact: true
//     },
//     {
//         name: "Manage Products",
//         to:'/product-list',
//         exact: false
//     }
// ]
// const MenuLink = ({label , to, activeOnlyWhenexact}) =>{
//     return(
//         <Route patch={to}
//         exact={activeOnlyWhenexact}
//         children={({match}) =>{
//             var active = match ? 'active' :'';
//             return(
//                 <li>
//                     <Link className={active} to={to}>{label}</Link>
//                 </li>
//             )
//         }}
//         />
//     )
// }
// class menu extends Component {
//   render(){
//     return (
//         <div className="navbar navbar-default">
//             <a className="navbar-brand" href="/">Shop</a>
//             <ul className="nav navbar-nav">
//                 {this.showMenu(menus)}
//             </ul>
//         </div>   
//     );
//   }
//   showMenu = (menus) =>{
//       var result = null;
//       if(menus.length > 0){
//           result = menus.map((menu, index) =>{
//               return <MenuLink
//               key={index}
//               label={menu.name}
//               to={menu.to}
//               activeOnlyWhenexact={menu.exact}
//               />
//           })
//       }
//       return result;
//   }
// }

// export default menu;
