import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Frontend Skeleton</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/"
              className="text-foreground/60 transition-colors hover:text-foreground/80 [&.active]:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/60 transition-colors hover:text-foreground/80 [&.active]:text-foreground"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground/60 transition-colors hover:text-foreground/80 [&.active]:text-foreground"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="text-foreground/60 transition-colors hover:text-foreground/80 [&.active]:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              to="/sidebar-demo"
              className="text-foreground/60 transition-colors hover:text-foreground/80 [&.active]:text-foreground"
            >
              Sidebar Demo
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button asChild size="sm">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}