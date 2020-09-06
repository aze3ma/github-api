import { combineReducers } from 'redux'

import resourceReducer from './resourceReducer'

export const rootReducer = combineReducers({ Resource: resourceReducer })

export type RootState = ReturnType<typeof rootReducer>
