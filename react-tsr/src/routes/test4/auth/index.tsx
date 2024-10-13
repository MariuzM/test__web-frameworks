import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test4/auth/')({
  component: () => <div>Hello /test4/auth/!</div>,
})
