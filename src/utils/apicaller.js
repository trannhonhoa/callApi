import axios from 'axios';
import * as Config from '../Constraints/config';
export default function callApi(endpoint, method, content){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: content
    }).catch(err =>{console.log(err)})
}















// import axios from "axios";
// import * as config from '../Constraints/config'
// export default function callApi(endpoint, method = "GET", body){
//     return axios({
//             method: method,
//             url: `${config.API_URL}/${endpoint}`,
//             data: body
//         }).catch(err =>{console.log(err)
//         })
// };