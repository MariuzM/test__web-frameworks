import './styles/main.style.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router'

import { Home } from './app'
import { ErrorPage } from './app/_error'
import { HomeLayout } from './app/_layout'
import { About } from './app/about'
import { Admin } from './app/admin'
import { AdminLayout } from './app/admin/_layout'
import { AdminAbout } from './app/admin/about'

export const routes = [
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{ path: '/admin', element: <Admin /> },
			{ path: '/admin/about', element: <AdminAbout /> },
		],
	},
] satisfies RouteObject[]

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<RouterProvider
		router={createBrowserRouter(routes, {
			future: {
				// v7_relativeSplatPath: true,
				v7_normalizeFormMethod: true,
				v7_partialHydration: true,
			},
		})}
		//  TODO for now TS is broken for this
		// future={{
		// 	v7_startTransition: true,
		// }}
	/>,
	// </StrictMode>,
)
