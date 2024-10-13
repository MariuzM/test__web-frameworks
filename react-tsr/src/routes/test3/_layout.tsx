import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/test3/_layout')({
	component: () => (
		<>
			<div>test3 Layout</div>
			<Outlet />
		</>
	),
})
