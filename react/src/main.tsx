import './styles/main.style.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './app/home'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
])

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<RouterProvider router={routes} />,
	// </StrictMode>,
)
