# Anatomy of a page(How a page should look like)

## Introduction
The main thing that makes up any page is components. These are availabe in the components folder; and can be imported and reused. 

Let me use the home page as an example for this; the code below is from the Home route.

```jsx
"use client";
import { Hero } from "@/components/component/hero";

export default function HomePage() {
  return (
    <div>
        <Hero />
    </div>

  );
}

```

## Breakdown of Components

```jsx
"use client";
```

This is a new directive introduced in Next.js 13 that tells the server to render the component on the client-side (in the browser). It's used for client components, which are a new type of component in Next.js 13 that enables more flexibility and better performance for certain use cases.

```jsx
import { Hero } from "@/components/component/hero";
```

This line imports the `Hero` component from the `@/components/component/hero` path. The `@` is an alias that refers to the project root directory. This is a way to import components or other modules relative to the project root, making it easier to move files around without having to update import paths.

```jsx
export default function HomePage() {
  // ...
}
```

This defines a React functional component named `HomePage` and exports it as the default export of this module. This component will be rendered when the corresponding route is visited in the Next.js application.

```jsx
return (
  <div>
    <Hero />
  </div>
);
```

## What the Hero component looks like

```jsx
"use client";
import sharp from "sharp";
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image";

export function Hero() {
  return (
    <div className="">
      <header className="flex h-14 items-center justify-between px-4 md:px-6 lg:container lg:mx-auto lg:max-w-7xl">
        <Link className="flex items-center" href="#">
        <Image
                alt="Clearpath"
                className="mx-auto w-full max-w-6xl rounded-md p-2"
                height={20}
                src="/group.png"
                width={20}
              />
        
          <span className="text-lg font-semibold">Clearpath</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">          
          <Link className="text-lg font-semibold hover:underline underline-offset-4" href="https://github.com/Samsonroyal/Clearpath">
            Github Repo
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-2 py-6">              
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="https://github.com/Samsonroyal/Clearpath">
                Github Repo
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Breathing life and clarity into work
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Clearpath is a lightweight project management tool that gives you clarity, focus, and adds fun to
                  your work.
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </Link>
              <Image
                alt="Clearpath"
                className="mx-auto w-full max-w-6xl rounded-lg"
                height={1200}
                src="/Macbook16dark.png"
                width={1200}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col justify-between items-center px-4 py-6 w-full shrink-0 border-t sm:flex-row sm:justify-between sm:px-8 lg:px-16 fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-80">
  <p className="text-xs text-gray-500 dark:text-gray-400">
    © 2024 Clearpath. Open Source Software built for the world from MEST.
  </p>

  <nav className="mt-4 sm:mt-0 flex gap-4 sm:gap-6">
    <Link
      className="text-xs hover:underline underline-offset-4"
      href="https://github.com/Samsonroyal/Clearpath/blob/main/PRIVACY.md"
    >
      Privacy
    </Link>
  </nav>
</footer>
    </div>
  )
}

function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

```

Inside the `HomePage` component, a `div` element is returned, which contains the `Hero` component whose code is shown above. This means that when the `HomePage` component is rendered, it will render a `div` element that contains the `Hero` component.
