import { GETDATA_BUTTON_CLICKED } from '../actions/types'

export default function (state = null, action) {
    switch (action.type) {
        case GETDATA_BUTTON_CLICKED:
            return action.payload;
    }
    return state

}