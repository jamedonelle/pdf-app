"use client"

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./ui/button"
import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from "@clerk/clerk-react"

const NavBar = () => {
    const { isAuthenticated, isLoading} = useConvexAuth();
    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href='/' 
                    className='flex z-40 font-semibold'>
                        <span>Translate.</span>
                    </Link>

                    {/* make mobile navbar just not done yet */}

                    <div className='hidden items-center space-x-4 sm:flex'>
                        <>
                            <Link href='/pricing' 
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}>Pricing</Link>

                            {isLoading && (
                                <p>is Loading...</p>
                            )}
                            {!isAuthenticated && !isLoading && (
                                <>
                                    <SignInButton mode="modal">
                                        <Button variant="ghost" size="sm">
                                            Login
                                        </Button>
                                    </SignInButton>
                                    <SignInButton mode="modal">
                                        <Button size="sm">
                                            Get Translate free
                                        </Button>
                                    </SignInButton>
                                </>
                            )}
                            {
                                isAuthenticated && !isLoading && (
                                    <>
                                        <Button variant="ghost" size="sm">
                                            <Link href="/dashboard">Dashboard</Link>
                                        </Button>
                                        <UserButton afterSignOutUrl="/"/>{/* go to root after sign out */}
                                    </>
                                )
                            }
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default NavBar