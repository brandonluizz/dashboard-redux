import {
    createStore,
} from 'redux'

import { rootReducer } from './pages/reducers'

export default function configureStore() {
    return createStore(
        rootReducer
    )
}