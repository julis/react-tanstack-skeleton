import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarLayout } from '@/components/layout/SidebarLayout'

export const Route = createFileRoute('/_sidebar')({
  component: () => (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  ),
})