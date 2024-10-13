import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test6/')({
	component: Test6,
})

function Test6() {
	const p = Route.useParams()
	console.log('🚀 ~ p:', p)
	return (
		<div>
			<h1>Test6</h1>
		</div>
	)
}
