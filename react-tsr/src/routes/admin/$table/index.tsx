import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/$table/')({
	loader: async ({ params }) => {
		return { table: params.table }
	},
	component: Table,
})

function Table() {
	const { table } = Route.useLoaderData()
	return (
		<div className="h-screen bg-gray-800 p-2 text-white">
			<div>Hello /admin/$table/!</div>
			{table && <div>Table: {table}</div>}
		</div>
	)
}
