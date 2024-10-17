import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
	component: Settings,
})

function Settings() {
	return (
		<div className="h-screen bg-gray-800 p-2 text-white">
			<Outlet />
		</div>
	)
}
