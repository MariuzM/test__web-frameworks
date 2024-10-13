import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/test5')({
	component: () => (
		<>
			<div>test5 Layout</div>
			<Outlet />
		</>
	),
})
