import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          Welcome to Frontend Skeleton
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
          A modern React.js skeleton with TanStack Router, Tailwind CSS, and shadcn/ui components.
          Get started building your next application today.
        </p>
        <div className="space-x-4 mt-8">
          <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>React 18+</CardTitle>
            <CardDescription>
              Built with the latest React features including hooks and concurrent rendering.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>TanStack Router</CardTitle>
            <CardDescription>
              Type-safe routing with file-based route generation and advanced features.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>
              Utility-first CSS framework for rapid UI development with shadcn/ui components.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}