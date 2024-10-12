import type { RouteConfig } from '@react-router/dev/routes'
import { index, route } from '@react-router/dev/routes'

export const routes: RouteConfig = [
	index('./root.tsx'),
	route('about', './about.tsx'),

	route('admin', './admin/index.tsx'),
	route('admin/about', './admin/about.tsx'),
]
