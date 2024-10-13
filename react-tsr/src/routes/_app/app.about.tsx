import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/app/about')({
	component: () => <div>Hello /_app/about!</div>,
})
