import { createFileRoute } from '@tanstack/react-router'
import { SidebarDemoPage } from '@/pages/SidebarDemoPage'

export const Route = createFileRoute('/_sidebar/sidebar-demo')({
  component: SidebarDemoPage,
})