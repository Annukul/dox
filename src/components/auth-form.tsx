import { cn } from "../lib/utils"
import { Button } from "../ui"
import { Icons } from "../ui"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  handleSigninWithGithub: React.MouseEventHandler<HTMLButtonElement>
}

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const { handleSigninWithGithub } = props

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button variant="dark" onClick={handleSigninWithGithub}>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Sigin with Github
      </Button>
    </div>
  )
}
