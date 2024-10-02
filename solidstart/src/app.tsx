import './styles/main.style.css'

import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'

import { Nav } from './components/Nav'

export default function App() {
	return (
		<Router
			root={(p) => (
				<>
					<Nav />
					<Suspense>{p.children}</Suspense>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	)
}
