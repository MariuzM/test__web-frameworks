import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/settings')({
  component: Settings,
})

function Settings() {
  return (
    <div className="p-2">
      <h3>Settings</h3>
    </div>
  )
}
