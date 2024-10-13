import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/about')({
	component: () => <div>Hello /test/about!</div>,
})
