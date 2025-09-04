import { createFileRoute } from '@tanstack/react-router'
import { AboutSidebarPage } from '@/pages/AboutSidebarPage'

export const Route = createFileRoute('/_sidebar/about-sidebar')({
  component: AboutSidebarPage,
})