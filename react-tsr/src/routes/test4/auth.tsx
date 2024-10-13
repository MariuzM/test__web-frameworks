import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/test4/auth')({
	component: () => (
		<>
			<div>test4 Layout</div>
			<Outlet />
		</>
	),
})
