import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function Root({ user, logoutHandler }) {
  return (
    <>
      <NavBar user={user} logoutHandler={logoutHandler}/>
      <Outlet />
    </>
  )
}