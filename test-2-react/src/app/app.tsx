import { Suspense } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from '@/widgets'

import { persistor, store } from './store/configure-store';

import 'react-toastify/dist/ReactToastify.css'
import Routing from '@/pages';

export function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                    <Suspense fallback={'Loading...'}>
                        <ToastContainer autoClose={4000} hideProgressBar position="bottom-right" closeButton />
                        <Layout>
                            <Routing />
                        </Layout>
                    </Suspense>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}
