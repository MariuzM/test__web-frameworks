import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: Root,
})

const NAV = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' },
	{ to: '/admin', label: 'Admin' },
	{ to: '/admin/settings', label: 'Admin Settings' },
]

function Root() {
	return (
		<>
			<div className="flex gap-4 p-2 text-lg">
				{NAV.map(({ to, label }) => (
					<Link key={to} to={to} activeProps={{ className: 'text-red-500' }}>
						{label}
					</Link>
				))}
			</div>
			<hr />
			<Outlet />
		</>
	)
}
