import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js' // Ensures compatibility for older browsers if you're using features not supported by all browsers

import App from './App'
import store from './store' // Import your Redux store

// Render the root of the application
const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    {' '}
    {/* Provide the Redux store to the rest of the app */}
    <App />
  </Provider>,
)
