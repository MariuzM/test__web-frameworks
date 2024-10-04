import { NavLink } from 'react-router'

const NAV = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
	{ to: '/admin', label: 'Admin' },
	{ to: '/admin/about', label: 'Admin About' },
]

export const Nav = () => {
	return (
		<nav className="flex gap-4">
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
		</nav>
	)
}
