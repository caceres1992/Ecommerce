'use client'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { TagsIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]



const LinkCollection = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={'/'}>
                        Home
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-gray-900' >
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <div
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md">
                                    <img
                                        className=' w-full object-cover h-full rounded-xl'
                                            alt='image man'
                                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1iVcBaynrK1RjSsziq6xptpXaE%2F2019-Spring-White-Shoes-Men-Casual-Shoes-Male-Sneakers-Cool-Street-Men-Shoes-Brand-Man-Footwear.jpg&f=1&nofb=1&ipt=e4a6685fe0a5f0bc6c7597cb68a5c6b1ffbf4d78c3602867a4a2d88ef1abcec5&ipo=images'
                                    />
                                </div>
                            </li>
                            <ListItem href="/product?shoes='sport'" title="Sport">

                                <p className=' text-gray-400 font-light'>Superior Comfort and Performance for Running and Workouts</p>
                            </ListItem>
                            <ListItem href="/product?shoes='urban'" title="Urban">
                                <p className=' text-gray-400 font-light'>Step into Urban Adventure with Style and Comfort!</p>


                            </ListItem>
                            <ListItem href="/product?shoes='sandals'" title="Sandals">
                                <p className=' text-gray-400 font-light'>Casual Coolness with Our Versatile Men's Sandals!</p>
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-gray-900' >
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">

                                <div
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md">
                                    <img
                                        className=' w-full object-cover h-full rounded-xl'
                                            alt='image women'
                                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1OyXBm26H8KJjSspmq6z2WXXap%2FWomen-Casual-Shoes-Brown-Sneakers-for-Female-Lace-Up-Classic-Design-Black-Shoes-for-Students-Ins.jpg&f=1&nofb=1&ipt=996df451aaee89e0883023cc9153edacbe2910de4ab5a40c3657f447ae3adce6&ipo=images'
                                    />
                                </div>

                            </li>
                            <ListItem href="/docs" title="Sport">

                                <p className=' text-gray-400 font-light'>Superior Comfort and Performance for Running and Workouts</p>
                            </ListItem>
                            <ListItem href="/docs/installation" title="Urban">
                                <p className=' text-gray-400 font-light'>Step into Urban Adventure with Style and Comfort!</p>


                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Sandals">
                                <p className=' text-gray-400 font-light'>Casual Coolness with Our Versatile Men's Sandals!</p>
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link
                        className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600' href={'CLEAREANCE'}>
                        Cleareance
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}



export default LinkCollection


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"