import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/test2/_layout')({
	component: () => (
		<>
			<div>test2 Layout</div>
			<Outlet />
		</>
	),
})
