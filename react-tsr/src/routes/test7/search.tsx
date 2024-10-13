import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test7/search')({
	validateSearch: (s) => {
		return {
			test: s.test as string,
		}
	},
	component: Search,
})

function Search() {
	const p = Route.useSearch()
	return (
		<div>
			<h1>Search</h1>
			<p>Search page</p>
			<p>
				Query Param <span className="font-bold text-red-400">test</span>: {p.test}
			</p>
		</div>
	)
}
