// import blogs from "@/utils/constants/blogs.json";
// import React from 'react'
// interface Props {
//     params: {
//         slug: string
//     }
// }

// const BlogPage = ({ params }: Props) => {

//     const blog = blogs.find((blog) => blog.slug === params.slug);
//     return (
//         <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0 pb-80">
//             <div className="flex flex-col items-center justify-center">
//                 <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
//                     {blog?.title}
//                 </h1>
//                 <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
//                     {blog?.description}
//                 </p>
//             </div>
//         </div>
//     )
// };

// export default BlogPage

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function BlogPostLayout() {
    return (
        <div className="container mb-40">
            <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
                <aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
                    <Link
                        href="/"
                        className="mb-5 flex items-center gap-1 text-muted-foreground"
                    >
                        <ChevronLeft className="h-full w-4" />
                        <span>Return to home</span>
                    </Link>
                    <h1 className="mb-5 text-balance text-3xl font-bold lg:text-4xl">
                        10 Best Practices for Building a Large Scale Design System
                    </h1>
                    <div className="flex gap-3">
                        <span className="relative flex shrink-0 overflow-hidden size-7 rounded-full">
                            <Image
                                className="aspect-square h-full w-full"
                                src="https://shadcnblocks.com/images/block/avatar-1.webp"
                                alt="John Doe's avatar"
                                width={28}
                                height={28}
                            />
                        </span>
                        <div>
                            <h2 className="font-semibold">John Doe</h2>
                            <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                    </div>
                </aside>
                <article className="prose prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Image
                            src="/opengraph-image.png"
                            alt="Blog post hero image"
                            width={800}
                            height={450}
                            className="w-full rounded-xl object-cover shadow-lg"
                        />
                    </div>
                    <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-lime-400 sm:text-5xl">
                        The Joke Tax Chronicles
                    </h1>
                    <p className="mb-6 text-xl leading-relaxed ">
                        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
                    </p>
                    <h2 className="mb-4 mt-12 text-3xl font-semibold text-gray-400">The King's Plan</h2>
                    <p className="mb-6 text-lg leading-relaxed ">
                        The king thought long and hard, and finally came up with{' '}
                        <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                            a brilliant plan
                        </Link>
                        : he would tax the jokes in the kingdom.
                    </p>
                    <blockquote className="my-8 border-l-4 border-blue-500 pl-4 italic text-xl text-gray-400">
                        "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
                    </blockquote>
                    <h3 className="mb-4 mt-10 text-2xl font-semibold text-gray-400">The Joke Tax</h3>
                    <p className="mb-6 text-lg leading-relaxed ">
                        The king's subjects were not amused. They grumbled and complained, but the king was firm:
                    </p>
                    <ul className="mb-6 list-disc pl-6 text-lg ">
                        <li className="mb-2">1st level of puns: 5 gold coins</li>
                        <li className="mb-2">2nd level of jokes: 10 gold coins</li>
                        <li>3rd level of one-liners: 20 gold coins</li>
                    </ul>
                    <p className="mb-6 text-lg leading-relaxed ">
                        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
                    </p>
                    <h3 className="mb-4 mt-10 text-2xl font-semibold text-gray-400">Jokester's Revolt</h3>
                    <p className="mb-6 text-lg leading-relaxed ">
                        Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed ">
                        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.
                    </p>

                </article>
            </div>
        </div>
    )
}


