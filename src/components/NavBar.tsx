'use client'

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { signIn } from "next-auth/react";

const NavBar = () => {
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
                            {/* <Link href='/dashboard'
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}>Sign in</Link> */}
                            <Link href='/dashboard'
                            className={buttonVariants({
                                size: 'sm'
                            })}>Get Started</Link>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default NavBar