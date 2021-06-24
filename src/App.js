import { Component } from 'react';
import './App.css';
import Menu from './Component/Menu/menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from './route';
class App extends Component {
  render(){
    return ( 
      <BrowserRouter>
        <div>    
            <Menu />
            <div className="container">
                
                <div className="row">
                    {this.showRoutes(routes)}
                </div>
            </div>
        </div>       
      </BrowserRouter>
    );
  }
  showRoutes = (routes) =>{
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
      })
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;













// import { Component } from 'react';
// import './App.css';
// import Menu from './Component/Menu/menu'
// import routes from './route'
// import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
// class App extends Component {
//   render(){

//     return (
//       <Router>
//       <div>    
//           <Menu />
//           <div className="container">
              
//               <div className="row">
                
//                 {this.showContentMenu(routes)}
//               </div>
//           </div>
//       </div>       
//       </Router>
//     );
//   }
//   showContentMenu = (routes) =>{
//     var result = null;
//     if(routes.length > 0){
//       result = routes.map((route, index)=>{
//         return  <Route key={index}
//           path={route.path}
//           exact={route.exact}
//           component={route.main} />
//       })
//     }
//     return <Switch>{result}</Switch>
//   }
// }

// export default App;

