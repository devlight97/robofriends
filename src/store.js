import { configureStore } from '@reduxjs/toolkit'
import appReducer from './containers/App/reducer'

export default configureStore({
  reducer: {
    app: appReducer
  },
})