import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
	component: Contact,
})

function Contact() {
	return (
		<div className="p-2">
			<h3>Home Contact</h3>
		</div>
	)
}
