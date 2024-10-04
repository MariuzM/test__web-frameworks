import { useRouteError } from 'react-router'

export type ErrorPageT = {
	statusText: string
	message: string
}

export const ErrorPage = () => {
	const err = useRouteError() as ErrorPageT

	return (
		<div id="error-page">
			<p>404</p>
			<p>
				<i>{err.statusText || err.message}</i>
			</p>
		</div>
	)
}
