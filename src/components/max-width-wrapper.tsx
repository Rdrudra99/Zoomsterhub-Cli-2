
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full container px-4 md:px-12 lg:px-20",
            className,
        )}>
            {children}
        </section>
    )
};

export default MaxWidthWrapper