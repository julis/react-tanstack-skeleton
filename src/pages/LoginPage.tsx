import { LoginForm } from '@/components/login-form'

export function LoginPage() {
  return (
    <div className="container mx-auto flex min-h-screen w-full items-center justify-center px-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] lg:w-[900px]">
        <LoginForm />
      </div>
    </div>
  )
}