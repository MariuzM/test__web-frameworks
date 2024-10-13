import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test5/')({
	component: () => <div>Hello /test5/!</div>,
})
