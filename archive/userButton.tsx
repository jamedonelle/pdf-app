import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button, buttonVariants } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropDownMenu"
import { SignIn, SignOut } from "./auth-components"

export default async function UserButton() {
  return (
    <Button>User</Button>
  )
}
