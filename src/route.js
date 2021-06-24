import NotFound from './Pages/NotFoundPage/NotFoundPage';
import HomePage from './Pages/HomePage/HomePage';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductActionPage from './Pages/ProductActionPage/ProductActionPage';
var routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false, 
        main: ({match, history}) => <ProductListPage match={match} history={history} />
    },
    {
        path: '/productAdd',
        exact: false, 
        main: ({history}) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false, 
        main: ({match, history}) => <ProductActionPage history={history} match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]
export default routes;


















// import React from 'react'
// import HomePage from "./Pages/HomePage/HomePage";
// import ProductListPage from "./Pages/ProductListPage/ProductListPage";
// import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
// import ProductActionPage from './Pages/ProductActionPage/ProductActionPage';
// const routes =[
//     {
//         path: '/',
//         exact: true,
//         main: () => <HomePage />
//     },
//     {
//         path: '/product-list',
//         exact: false,
//         main: () => <ProductListPage />
//     },
//     {
//         path: '/product/add',
//         exact: false,
//         main: ({history}) => <ProductActionPage  history={history}/>
//     },
//     {
//         path: '/product/:id/edit',
//         exact: false,
//         main: ({history, match}) => <ProductActionPage  history={history} match={match}/>
//     },
//     {
//         path: '',
//         exact: false,
//         main: () => <NotFoundPage />
//     }
// ]
// export default routes;


































