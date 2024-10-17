import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_home')({
	component: Home,
})

const GROUP_NAV = [
	[
		{ to: '/', label: 'Home' },
		{ to: '/about', label: 'About' },
	],
]

function Home() {
	return (
		<div className="h-screen bg-red-800 p-2">
			<div className="flex gap-10 p-2 text-lg">
				{GROUP_NAV.map((group, i) => (
					<div key={i} className="flex flex-col gap-2 bg-gray-600">
						{group.map(({ to, label }) => (
							<Link key={to} to={to} activeProps={{ className: 'text-red-500' }}>
								- {label}
							</Link>
						))}
					</div>
				))}
			</div>
			<Outlet />
		</div>
	)
}
