import { NavLink } from 'react-router'

const HOME_NAV = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
]

export const Nav = () => {
	return (
		<nav className="bg-red-400">
			{HOME_NAV.map(({ label, href }) => (
				<NavLink
					className={(p) => `py-4 px-2 ${p.isActive ? 'text-[var(--primary)]' : ''}`}
					key={label}
					to={href}
					end
				>
					{label}
				</NavLink>
			))}
		</nav>
	)
}

const ADMIN_NAV = [
	{ label: 'Admin', href: '/admin' },
	{ label: 'Admin About', href: '/admin/about' },
]

export const AdminNav = () => {
	return (
		<nav className="bg-blue-400">
			{ADMIN_NAV.map(({ label, href }) => {
				return (
					<NavLink
						className={(p) => {
							return `p-4 py-5 hover:text-[var(--primary)] ${p.isActive ? 'text-[var(--primary)]' : ''}`
						}}
						key={label}
						to={href}
						end
					>
						{label}
					</NavLink>
				)
			})}
		</nav>
	)
}
