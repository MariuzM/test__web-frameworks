import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/user/about')({
  component: () => <div>Hello /test/user/about!</div>,
})
