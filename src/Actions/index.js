import * as types from '../Constraints/ActionStyle';
import callApi from '../utils/apicaller';
// Get product
export const actFetchProductsRequest = () =>{
    return Dispatch => {
        return callApi('products', 'GET', null).then(res =>{
            Dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) =>{
    return{
        type: types.FETCH_PRODUCTS,
        products
    }
}
//Add product
export const actAddProductsRequest = (product) =>{
    return Dispatch => {
        return callApi('products', 'POST', product).then(res =>{
            Dispatch(actAddProducts(res.data))
        })
    }
}
export const actAddProducts = (product) =>{
    return{
        type: types.ADD_PRODUCTS,
        product
    }
}
// Delete
export const actDeleteProductsRequest = (id) =>{
    return Dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            Dispatch(actDeleteProducts(res.data))
        })
    }
}
export const actDeleteProducts = (id) =>{
    return{
        type: types.DELETE_PRODUCT,
        id
    }
}
// Edit
export const actEditProductsRequest = (id) =>{
    return Dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res =>{ // lay san pham co id
            Dispatch(actEditProducts(res.data))
        })
    }
}
export const actEditProducts = (product) =>{
    return{
        type: types.EDIT_PRODUCT,
        product
    }
}
// Update
export const actUpdateProductsRequest = (product) =>{
    return Dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res =>{ // lay san pham co id
            Dispatch(actUpdateProducts(res.data))
        })
    }
}
export const actUpdateProducts = (product) =>{
    return{
        type: types.UPDATE_PRODUCT,
        product
    }
}













// import * as types from '../Constraints/ActionStyle';
// import callApi from '../utils/apicaller';



// // Nho la chi co POST vs PUT moi co gia tri dau vao la mot product
// export const actFetchProductsRequest = () =>{
//     // tra ve mot ham dispatch
//     return dispatchFuntion =>{
//         return callApi('products', 'GET', null).then(res =>{
//                 dispatchFuntion(actFetchProducts(res.data)); // res luc nay la danh sach cac san pham
//             })
//     }
// }

// export const actFetchProducts = (products) =>{
//     return{
//         type: types.FETCH_PRODUCTS,
//         products
//     }
// }
// export const actDeleteProductsRequest = (id) =>{
//     return dispatchFuntion =>{ //callback
//         return callApi(`products/${id}`, 'DELETE', null).then(res =>{
//                 dispatchFuntion(actDeleteProduct(id))
//             })
//     }
// }
// export const actDeleteProduct = (id) =>{
//      return{
//          type:types.DELETE_PRODUCT,
//          id
//      }
// }
// export const actAddProductsRequest = (product) =>{
//     return dispatchFuntion =>{ //callback
//         return callApi(`products`, 'POST', product).then(res =>{
//                 dispatchFuntion(actAddProduct(res.data)); // res nay la 1 san pham
//             })
//     }
// }
// export const actAddProduct = (product) =>{
//     return{
//         type:types.ADD_PRODUCT,
//         product
//     }
// }
// export const actGetProductsRequest = (id) =>{
//     return dispatchFuntion =>{ //callback
//         return callApi(`products/${id}`, 'GET', null).then(res =>{
//                 dispatchFuntion(actGetProduct(res.data)); // res nay la 1 san pham
//             })
//     }
// }
// export const actGetProduct = (product) =>{
//     return{
//         type:types.EDIT_PRODUCT,
//         product
//     }
// }
// export const actUpdateProductsRequest = (product) =>{
//     return dispatchFuntion =>{ //callback
//         return callApi(`products/${product.id}`, 'PUT', product).then(res =>{ // cap nhat thi can mot dau vao la product
//                 dispatchFuntion(actUpdateProduct(res.data)); // res nay la 1 san pham
//             })
//     }
// }
// export const actUpdateProduct = (product) =>{
//     return{
//         type:types.UPDATE_PRODUCT,
//         product
//     }
// }