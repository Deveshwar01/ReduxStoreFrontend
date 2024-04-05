import React from 'react'
import Routes from './Routes.jsx'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast";
import store from './store/store.jsx'
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Toaster/>
    </Provider>
  )
}

export default App