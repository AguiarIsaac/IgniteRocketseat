import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaoultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
