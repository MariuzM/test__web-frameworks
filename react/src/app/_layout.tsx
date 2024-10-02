import { NavLink, Outlet } from 'react-router-dom'

import { routes } from '../main'

export const HomeLayout = () => {
	return (
		<div>
			<div className="flex gap-4">
				{routes[0].children?.map((route) => (
					<NavLink
						className={(p) => (p.isActive ? 'bg-red-200' : p.isPending ? 'pending' : '')}
						key={route.path}
						to={route.path}
					>
						{route.path === '/' ? 'Home' : route.path.replace('/', '')}
					</NavLink>
				))}
			</div>
			<Outlet />
		</div>
	)
}
