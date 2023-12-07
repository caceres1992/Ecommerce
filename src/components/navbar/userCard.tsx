'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { ChevronDown, Settings2Icon, ShoppingBag } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

type Props = {
  title: string,
  href: string,

}
type Checked = DropdownMenuCheckboxItemProps["checked"]
const UserCard = ({ title, href }: Props) => {


  return <div>
    <div className=' flex items-center gap-2 text-center'>
      <Avatar className=' bg-gray-950'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className=' text-gray-200'><p className=' text-xs font-bold'>Welcome</p>
        <p>Jasson Caceres</p>
      </div>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'><Settings2Icon/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            My order
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
    
        <DropdownMenuItem>Rewards</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

      
    </div>
  </div>


}

export default UserCard