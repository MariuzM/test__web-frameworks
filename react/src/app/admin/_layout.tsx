import { Outlet } from 'react-router'

import { AdminNav } from '../../components/Navs'

export const AdminLayout = () => {
	return (
		<div>
			<AdminNav />
			<Outlet />
		</div>
	)
}
