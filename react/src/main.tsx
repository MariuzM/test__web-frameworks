import './styles/main.style.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

import { Home } from './app'
import { ErrorPage } from './app/_error'
import { HomeLayout } from './app/_layout'
import { About } from './app/about'
import { Admin } from './app/admin'
import { AdminAbout } from './app/admin/about'

export const routes = [
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
			{ path: '/admin', element: <Admin /> },
			{ path: '/admin/about', element: <AdminAbout /> },
		],
	},
] satisfies RouteObject[]

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<RouterProvider router={createBrowserRouter(routes)} />,
	// </StrictMode>,
)
