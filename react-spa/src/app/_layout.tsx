import { NavLink, Outlet } from 'react-router'

import { routes } from '../main'

export const HomeLayout = () => {
	return (
		<div>
			<div className="flex gap-4">
				{routes[0].children?.map((route) => (
					<NavLink
						className={({ isActive }) => (isActive ? 'bg-red-200' : '')}
						key={route.path}
						to={route.path}
						end
					>
						{route.path === '/' ? 'Home' : route.path.replace('/', '')}
					</NavLink>
				))}
			</div>
			<Outlet />
		</div>
	)
}
