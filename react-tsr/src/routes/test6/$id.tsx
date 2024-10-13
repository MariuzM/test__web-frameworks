import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test6/$id')({
	loader: async ({ params }) => {
		await new Promise((r) => setTimeout(r, 1000))
		return { id: params.id }
	},
	component: Test6,
})

function Test6() {
	const { id } = Route.useLoaderData()
	return (
		<div>
			<h1>Test6</h1>
			<p>id: {id}</p>
		</div>
	)
}
