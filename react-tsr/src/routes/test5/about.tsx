import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test5/about')({
	component: () => <div>Hello /test5/about!</div>,
})
