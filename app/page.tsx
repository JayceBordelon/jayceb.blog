import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { POSTS_META_DATA } from "@/lib/data/posts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section  className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Blog Posts
          </h2>
          <p className="text-muted-foreground mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            My latest thoughts and perspectives on web development, technology, and software engineering derived entirely from personal learning and experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {POSTS_META_DATA.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0 mx-4"
            >
              <div className="aspect-16/9 w-full">
                <Link
                  href={`/posts/${post.id}`}
                  className="fade-in transition-opacity duration-200 hover:opacity-70"
                  prefetch={true}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                    width={34}
                    height={34}
                  />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link href={`/posts/${post.id}`} prefetch={true}>
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-foreground flex items-center hover:underline"
                  prefetch={true}
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
