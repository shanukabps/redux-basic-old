import axios from 'axios'
import { GETDATA_BUTTON_CLICKED, SELECT_POST } from './types'


// export const fetchPost = () => {

//     return {
//         type: GETDATA_BUTTON_CLICKED,
//         payload: [
//             {
//                 userId: 1,
//                 id: 1,
//                 title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                 body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//             },
//             {
//                 userId: 1,
//                 id: 2,
//                 title: "qui est esse",
//                 body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
//             },
//             {
//                 userId: 1,
//                 id: 3,
//                 title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//                 body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
//             }
//         ]
//     }

// }

export const fetchPost = () => (dispatch) => {

    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res =>
            dispatch({
                type: GETDATA_BUTTON_CLICKED,
                payload: res.data

            }))
}


export const selectPost = (post) => {
    return {
        type: SELECT_POST,
        payload: post
    }
}