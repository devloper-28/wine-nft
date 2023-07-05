import React, { useEffect, lazy, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import Layout from './components/Layout/Layout'

import { useEagerConnect, useInactiveListener } from './hooks'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { brandSaga, getFaqs, loginAction, regionSaga } from './store/actions'
import { guestRoutes } from './routes/mainRoutes/mainRoutes'
import { Modal, Button } from 'react-bootstrap'

const App = () => {
	const triedEager = useEagerConnect()
	useInactiveListener(!!triedEager)
	const [show, setShow] = useState(false)
	const { token } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const { active, chainId, account, error, deactivate } = useWeb3React()
	const pathname = window.location.pathname.split('/')[1]
	useEffect(() => {
		if (account) {
			dispatch(loginAction({ id: account }))
			dispatch(getFaqs())
			dispatch(regionSaga())
		}
	}, [account])
	useEffect(() => {
		dispatch(getFaqs())
		dispatch(brandSaga())
		dispatch(regionSaga())
	}, [])
	useEffect(() => {
		if (active || error) {
			if (chainId !== 80001 || error) {
				sessionStorage.setItem('connectedWallet', '')
				localStorage.clear()
				if (error.message.includes('Unsupported chain')) setShow(true)
				deactivate()
			}
		}
	}, [error, chainId, active])
	const redirectHandler = () => {
		const guestRoute = guestRoutes
			.filter((item) => item.redirectRoute === undefined)
			.map((item) => item.path)
		return !guestRoute.includes(`/${pathname}`) ? <Redirect to="/" /> : null
	}
	let mainContent
	const renderContent = () => {
		mainContent = (
			<>
				{guestRoutes.map(
					(route) =>
						route.redirectRoute === undefined && (
							<Route
								key={route.name}
								path={route.path}
								exact={route.exact}
								name={route.name}
							>
								<route.component />
							</Route>
						),
				)}
				{redirectHandler()}
			</>
		)
		if (active || localStorage.getItem('shouldEagerConnect')) {
			mainContent = (
				<>
					<Route
						path="/"
						component={lazy(() =>
							import('./views/MainContainer/MainContainer'),
						)}
					/>
				</>
			)
		}
		return mainContent
	}

	const onChangeNetworkClick = async () => {
		// Metamask adds Ropsten chain by default, so no need to check wether chain is added or not
		await window.ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: '0x3' }],
		})
	}
	useEffect(() => {
		// Remove lodader from index.html
		const loaderEle = document.getElementById('root-loader')
		loaderEle.remove()
	}, [])

	return (
		<React.Suspense fallback={<Loader />}>
			<Modal show={show} className="bg-black">
				<Modal.Body className="text-dark text-center bg-black">
					Please switch to polygon testnet.
					<h3>{error?.message}</h3>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						// onClick={handleClose}
						className="d-flex justify-content-center m-auto text-white bg-dark"
					>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
			<BrowserRouter>
				<Layout>
					<Switch>{renderContent()}</Switch>
				</Layout>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default App
