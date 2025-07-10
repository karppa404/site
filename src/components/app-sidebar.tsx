

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { BsSubstack, BsGithub } from "react-icons/bs";
import ThemeSwitcher from "@/components/theme-switcher"
// Navigation items
import { Separator } from "@/components/ui/separator"
const navigation = [
    { name: 'Blog Posts', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Photos', href: '/photos' },
]


export function AppSidebar() {
    return (
        <Sidebar className="">
            <SidebarHeader>
                <div className="visible md:hidden">
                    <SidebarTrigger />

                </div>
                <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <Image
                        src="/plush.png"
                        alt="User Avatar"
                        width={100}
                        height={100}
                        className=""
                    />
                    <div className="text-center group-data-[collapsible=icon]:hidden">
                        <Link href={"/"} className="text-lg font-semibold">
                            <span className="text-sm font-medium">Karppa</span>
                        </Link>
                    </div>
                </div>
                <Separator />
                <div className="w-full inline-flex justify-center gap-5">
                    <Link href={"https://jottingannon.substack.com/"}>
                        <BsSubstack className="size-6" />
                    </Link>
                    <Link href={"https://github.com/karppa404"}>
                        <BsGithub className="size-6" />
                    </Link>
                </div>
                <Separator />

            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">

                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigation.map((item) => (
                                <SidebarMenuItem key={item.name} >
                                    <SidebarMenuButton asChild>
                                        <Link href={item.href} className="flex items-center gap-3 text-center w-full">
                                            <span className="">{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


            </SidebarContent>
            <SidebarFooter
            >
                <ThemeSwitcher />
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}