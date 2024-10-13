import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test3/about')({
  component: () => <div>Hello /test3/about!</div>,
})
