import { lazy } from 'react'
import { Route } from 'react-router'

const LoginPage = lazy(() => import('./login'))

function Routing() {
    return (
        <>
            <Route path="/" component={LoginPage} />
        </>
    )
}

export default Routing