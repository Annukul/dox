import { Rocket } from "lucide-react"
import { cn } from "../lib/utils"
import { buttonVariants } from "../ui"
import { UserAuthForm } from "../components"

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export const Authentication = () => {
  const handleSigninWithGithub = () => {
    const authUrl =
      "https://github.com/login/oauth/authorize?client_id=ae428d1eef36e06da413&redirect_uri=http://localhost:3000/oauth/github/callback&scope=read:user&state=bla"

    window.location.href = authUrl
  }
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </a>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1541186877-bb5a745edde5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Rocket className="mr-2 h-6 w-6" /> Dev Docx
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-xl font-medium tracking-tight">
                Start using Dox by just one click
              </h1>
            </div>
            <UserAuthForm handleSigninWithGithub={handleSigninWithGithub} />
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </a>
              .
            </p> */}
          </div>
        </div>
      </div>
    </>
  )
}
