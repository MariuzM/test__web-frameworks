import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: Root,
})

const NAV = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' },
]

function Root() {
	return (
		<>
			<div className="flex gap-2 p-2 text-lg">
				{NAV.map(({ to, label }) => (
					<Link key={to} to={to} activeProps={{ className: 'font-bold' }}>
						{label}
					</Link>
				))}
			</div>
			<hr />
			<Outlet />
		</>
	)
}
