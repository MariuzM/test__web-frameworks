import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test3/')({
  component: () => <div>Hello /test3/!</div>,
})
