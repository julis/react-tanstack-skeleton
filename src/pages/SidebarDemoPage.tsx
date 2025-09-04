import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function SidebarDemoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sidebar Layout Demo</h1>
        <p className="text-muted-foreground">
          This page demonstrates the new sidebar layout with collapsible navigation.
        </p>
      </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Collapsible Sidebar</CardTitle>
              <CardDescription>
                The sidebar can be collapsed to icons only for more space.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Click the hamburger menu icon in the top navigation to toggle the sidebar.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>
                The layout adapts to different screen sizes automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                On mobile devices, the sidebar becomes a slide-out drawer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navigation Groups</CardTitle>
              <CardDescription>
                Navigation items are organized into logical groups.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Main navigation and dashboard sections are separated for better organization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Keyboard Support</CardTitle>
              <CardDescription>
                Toggle the sidebar using keyboard shortcuts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Press <kbd className="px-1.5 py-0.5 text-xs font-semibold bg-muted rounded border">Cmd+B</kbd> (Mac) 
                or <kbd className="px-1.5 py-0.5 text-xs font-semibold bg-muted rounded border">Ctrl+B</kbd> (PC) 
                to toggle the sidebar.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active State</CardTitle>
              <CardDescription>
                Current page is highlighted in the navigation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The active navigation item is automatically highlighted based on the current route.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dark Mode Support</CardTitle>
              <CardDescription>
                The sidebar layout supports dark mode theming.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                Toggle Theme
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Usage Instructions</CardTitle>
              <CardDescription>
                How to use the new sidebar layout in your pages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Import the SidebarLayout</h4>
                <code className="block p-3 bg-muted rounded text-sm">
                  {`import { SidebarLayout } from '@/components/layout/SidebarLayout'`}
                </code>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">2. Wrap your page content</h4>
                <code className="block p-3 bg-muted rounded text-sm whitespace-pre-wrap">
{`export function YourPage() {
  return (
    <SidebarLayout>
      <div>
        {/* Your page content here */}
      </div>
    </SidebarLayout>
  )
}`}
                </code>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Features included</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Collapsible sidebar with icon-only mode</li>
                  <li>Responsive design for mobile and desktop</li>
                  <li>Top navigation bar with branding and actions</li>
                  <li>Organized navigation groups</li>
                  <li>Keyboard shortcuts support</li>
                  <li>Active route highlighting</li>
                  <li>Dark mode compatibility</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }