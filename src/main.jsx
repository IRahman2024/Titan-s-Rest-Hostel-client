import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './components/routes/Router';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProviders from './Providers/AuthProviders';
import { ModalContainer } from 'reoverlay';



// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <React.StrictMode>
          <div>
            <RouterProvider router={router} />
          </div>
        </React.StrictMode>
      </AuthProviders>
    </QueryClientProvider>
  </HelmetProvider>,
)
