import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers' // Đảm bảo rằng đường dẫn đến rootReducer là chính xác
const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
