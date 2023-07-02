import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import '../src/firebase'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
