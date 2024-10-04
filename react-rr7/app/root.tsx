import './styles/main.style.css'

import { NavLink, Outlet, Scripts, ScrollRestoration } from 'react-router'

const NAV = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<div className="flex gap-4">
					{NAV.map((nav) => (
						<NavLink
							className={({ isActive }) => (isActive ? 'bg-red-200' : '')}
							key={nav.to}
							to={nav.to}
							end
						>
							{nav.label}
						</NavLink>
					))}
				</div>

				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}
