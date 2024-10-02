import './styles/main.style.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorPage } from './app/_error'
import { Home } from './app/home'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
])

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<RouterProvider router={routes} />,
	// </StrictMode>,
)
