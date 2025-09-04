import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '@/pages/ContactPage'

export const Route = createFileRoute('/_root/contact')({
  component: ContactPage,
})