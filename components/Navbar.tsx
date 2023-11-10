'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoginButton, LogoutButton } from "@/components/LoginButtons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Navbar = ({session}:any) => {
  if(!session) {
    return (
      <div className="w-full flex justify-between items-center shadow-md" id="navbar">
        <NavigationMenu className="m-5">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[400px]">
                <NavigationMenuLink className="mx-auto w-[350px] hover:bg-slate-50 py-10">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[400px]">
                <NavigationMenuLink className="mx-auto w-[350px] hover:bg-slate-50 py-10">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="m-5">
          <LoginButton />
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full flex justify-between shadow-md" id="navbar">
        <NavigationMenu className="m-5">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[400px]">
                <NavigationMenuLink className="hover:bg-slate-50 flex flex-col items-center">
                  <a href="/" className="w-full py-2 text-center">Home</a>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:bg-slate-50 flex flex-col items-center">
                  <a href="/blog" className="w-full py-2 text-center">Blog</a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[400px]">
                <NavigationMenuLink className="mx-auto w-[350px] hover:bg-slate-50 py-10">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="m-5">
            <Avatar>
              <AvatarImage src={session?.user?.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
}