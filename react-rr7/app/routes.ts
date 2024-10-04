import type { RouteConfig } from '@react-router/dev/routes'
import { index, route } from '@react-router/dev/routes'

export const routes: RouteConfig = [
	index('./routes/index.tsx'),
	route('about', './routes/about.tsx'),

	// route('admin', './routes/admin/index.tsx'),
	// route('admin about', './routes/admin/about.tsx'),

	// route('admin', './routes/admin/index.tsx', [
	// 	index('./index.tsx'),
	// 	route('admin about', './routes/admin/about.tsx'),
	// ]),

	route('admin', [
		//
		index('./routes/admin/index.tsx'),
		// route('admin about', './routes/admin/about.tsx'),
	]),
]
