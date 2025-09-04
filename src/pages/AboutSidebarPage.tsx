import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutSidebarPage() {
  return (
    <div className="max-w-4xl">
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
              <CardTitle>New Sidebar Layout</CardTitle>
              <CardDescription>
                Enhanced navigation with collapsible sidebar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Collapsible sidebar with icon-only mode</li>
                <li>✅ Responsive design for mobile and desktop</li>
                <li>✅ Top navigation bar with branding</li>
                <li>✅ Organized navigation groups</li>
                <li>✅ Keyboard shortcuts (Cmd/Ctrl + B)</li>
                <li>✅ Active route highlighting</li>
                <li>✅ Dark mode compatibility</li>
                <li>✅ Mobile-friendly slide-out drawer</li>
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
              <CardTitle>Layout Comparison</CardTitle>
              <CardDescription>
                Differences between the original and sidebar layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Original Layout</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Fixed header navigation</li>
                    <li>• Full-width content area</li>
                    <li>• Footer at bottom</li>
                    <li>• Simple horizontal menu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sidebar Layout</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Collapsible sidebar navigation</li>
                    <li>• Contextual top navigation bar</li>
                    <li>• More screen real estate</li>
                    <li>• Organized navigation groups</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}