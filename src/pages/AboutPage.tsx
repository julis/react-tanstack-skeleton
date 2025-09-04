import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">About Frontend Skeleton</h1>
        <p className="text-muted-foreground mt-4">
          Learn more about this React frontend skeleton and the technologies that power it.
        </p>

        <div className="grid gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>
                Modern web development tools and frameworks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>React 18+:</strong> Latest React with hooks and concurrent features</li>
                <li><strong>TypeScript:</strong> Type safety and enhanced developer experience</li>
                <li><strong>Vite:</strong> Fast build tool and development server</li>
                <li><strong>TanStack Router:</strong> Type-safe routing solution</li>
                <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
                <li><strong>shadcn/ui:</strong> Accessible, customizable component library</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                What you get out of the box
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ File-based routing with TanStack Router</li>
                <li>✅ Responsive design with Tailwind CSS</li>
                <li>✅ Accessible UI components from shadcn/ui</li>
                <li>✅ TypeScript configuration with path mapping</li>
                <li>✅ Development tools and hot reload</li>
                <li>✅ Clean project structure for scalability</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                How to use this skeleton for your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Clone or fork this repository</li>
                <li>Install dependencies with <code className="bg-muted px-1 rounded">npm install</code></li>
                <li>Start development server with <code className="bg-muted px-1 rounded">npm run dev</code></li>
                <li>Begin building your application in the <code className="bg-muted px-1 rounded">src</code> directory</li>
                <li>Add your own pages, components, and business logic</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}