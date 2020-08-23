import React from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';
import configureStore from './src/state/store/configureStore'
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './App';
import axios from 'axios'

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://news-on-rails-api.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

const ApplicationWrapper = () => {
  const store = configureStore()
  window.globalStore = store
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  )
}

registerRootComponent(ApplicationWrapper);
