import '../styles/main.style.css'

import { Outlet, Scripts, ScrollRestoration } from 'react-router'

import { Nav } from '../components/Nav'

export const Layout = () => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<Nav />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function Root() {
	return <div>Home</div>
}

export const HydrateFallback = () => {
	return <div>Loading...</div>
}

export const ErrorBoundary = () => {
	return <h1>Something went wrong</h1>
}
