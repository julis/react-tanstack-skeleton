import { createFileRoute, Outlet } from '@tanstack/react-router'
import { RootLayout } from '@/components/layout/RootLayout'

export const Route = createFileRoute('/_root')({
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ),
})