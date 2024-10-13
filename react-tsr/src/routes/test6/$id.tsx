import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test6/$id')({
	component: Test6,
})

function Test6() {
	const { id } = Route.useParams()
	return (
		<div>
			<h1>Test6</h1>
			<p>id: {id}</p>
		</div>
	)
}
