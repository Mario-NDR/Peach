import App from 'Containers/App'
import Error, { Forbidden } from 'Containers/Error'
import Landing from 'Containers/Landing'
import Login from 'Containers/Login'
import Overview from 'Containers/Overview'

export default function createRoutes() {
  return [
    {
      path: '/',
      component: Landing,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/overview',
      component: Overview,
    },
    {
      path: '/app',
      component: App,
    },
    {
      path: '/404',
      component: Error,
    },
    {
      path: '/403',
      component: Forbidden,
    },
    {
      component: Error,
    }
  ]
}
