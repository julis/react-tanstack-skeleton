import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_sidebar/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div className="p-2">
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  )
}