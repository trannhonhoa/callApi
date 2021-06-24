import * as types from '../Constraints/ActionStyle'
var initialState =[]

var findIndex = (state, id)=>{
    var result = -1;
    state.forEach((product, index)=>{
        if(product.id === id){
            return result =  index;
        }
    })
    return result;
}
const products = (state = initialState, action)=>{
    var index = -1;
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            console.log(state);
            return [...action.products]
        case types.ADD_PRODUCTS:
            console.log(state);
            state.push(action.product)
            return[...state];  
        case types.DELETE_PRODUCT:
             index = findIndex(state, action.id);
            state.splice(index, 1);
            return[...state];
        case types.UPDATE_PRODUCT:
            console.log(state);
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state]
        default: return [...state];
    }
}
export default products;




















// import * as types from '../Constraints/ActionStyle' 
// var findIndex = (products, id) =>{
//     var result = -1;
//     products.forEach((product, index)=>{
//       if(product.id === id){
//         result = index; 
//       }
//     })
//     return result;
//   }
// const products = (state = [] , action) =>{
//     var index = -1;
//     switch(action.type){
//         case types.FETCH_PRODUCTS:
//             return [...action.products];
//         case types.DELETE_PRODUCT:
//             console.log(state);
//             index = findIndex(state, action.id);
//             state.splice(index, 1);
//             return [...state]
//         case types.ADD_PRODUCT:
//             state.push(action.product);
//             return [...state]
//         case types.UPDATE_PRODUCT:
//           index = findIndex(state, action.product.id);
//           state[index] = action.product;
//           return [...state]
//         default: return [...state];
//     }
// }
// export default products;









