import { CHANGE_DASHBOARD_REQUEST } from './actions'

const INITIAL_STATE = {
    summary: {
        totalSales: [],
        salesPerCardBrand: [],

    }
}

const dashReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DASHBOARD_REQUEST: {
            return { ...state, summary: action.payload }
        }
        default:
            return state
    }
}

export default dashReducer