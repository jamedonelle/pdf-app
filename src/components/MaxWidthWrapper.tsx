import React from 'react'
import { ReactNode } from 'react'
import { cn } from '../lib/utils'

// not sure what this does should prob look into it
const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        // what is a div lol
        // also this style stuff is funky
        <div className={cn('mx-auto w-full max-w-screen-x1 px-2.5 md:px-20', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper