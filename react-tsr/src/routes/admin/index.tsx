import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Admin Home</h3>
    </div>
  )
}
