import { Outlet } from 'react-router'

import { Nav } from '../components/Navs'

export const HomeLayout = () => {
	return (
		<div>
			<Nav />
			<Outlet />
		</div>
	)
}
