import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export default function About() {
  return (
    <main>
      {/* @ts-ignore-error */}
      <Navbar />
      <section className="px-6 md:px-0 max-w-2xl mx-auto my-10 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-none">
          What is ChatterBox?
        </h1>
        <p className="md:text-lg text-gray-700">
          This is not a real application. It&apos;s just an experiment to learn
          more about Next 13 new features.
        </p>
      </section>
      <section className="px-6 md:px-0 max-w-2xl mx-auto my-10 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-none">
          What&apos;s included?
        </h2>

        <h3 className="text-2xl font-bold border-b border-gray-300 pb-4">
          Next.js features
        </h3>
        <p className="font-medium text-xl">Loading UI</p>
        <Link
          href="https://beta.nextjs.org/docs/routing/loading-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://beta.nextjs.org/docs/routing/loading-ui
        </Link>
        <p className="italic text-sm">
          Next.js 13 introduced a new file convention, loading.js, to help you
          create meaningful Loading UI with React Suspense. With this
          convention, you can show an instant loading state from the server
          while the content of a route segment loads, the new content is
          automatically swapped in once rendering is complete.
        </p>
        <p className="font-medium text-xl">Server components</p>
        <Link
          href="https://beta.nextjs.org/docs/rendering/server-and-client-components"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://beta.nextjs.org/docs/rendering/server-and-client-components
        </Link>
        <p className="italic text-sm">
          React Server Components (RSC) allow developers to better leverage
          server infrastructure. For example, large dependencies that previously
          would impact the JavaScript bundle size on the client can instead
          remain entirely on the server, leading to improved performance.
        </p>
        <p className="font-medium text-xl">Cache</p>
        <Link
          href="https://beta.nextjs.org/docs/data-fetching/caching"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://beta.nextjs.org/docs/data-fetching/caching
        </Link>
        <p className="italic text-sm">
          Per-request caching allows you to cache and deduplicate requests on a
          per-request basis.
        </p>
        <p className="font-medium text-xl">Middleware</p>
        <Link
          href="https://beta.nextjs.org/docs/upgrade-guide/version-12#upgrading-to-122"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://beta.nextjs.org/docs/upgrade-guide/version-12#upgrading-to-122
        </Link>
        <p className="italic text-sm">
          Next.js now uses the Rust-based compiler SWC to compile
          JavaScript/TypeScript. This new compiler is up to 17x faster than
          Babel when compiling individual files and up to 5x faster Fast
          Refresh.
        </p>

        <h3 className="text-2xl font-bold border-b border-gray-300 pb-4">
          Authentication
        </h3>
        <p className="font-medium text-xl">NextAuth.js</p>
        <Link
          href="https://next-auth.js.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://next-auth.js.org
        </Link>
        <p className="italic text-sm">
          NextAuth.js is a complete open-source authentication solution for
          Next.js applications.
        </p>
        <h3 className="text-2xl font-bold border-b border-gray-300 pb-4">
          Style & Components
        </h3>
        <p className="font-medium text-xl">TailwindCSS</p>
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://tailwindcss.com/
        </Link>
        <p className="italic text-sm">
          Tailwind CSS works by scanning all of your HTML files, JavaScript
          components, and any other templates for class names, generating the
          corresponding styles and then writing them to a static CSS file.
          It&apos;s fast, flexible, and reliable — with zero-runtime.
        </p>
        <p className="font-medium text-xl">Class Variance Authority</p>
        <Link
          href="https://cva.style/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://cva.style/
        </Link>
        <p className="italic text-sm">
          CSS-in-TS libraries such as Stitches and Vanilla Extract are fantastic
          options for building type-safe UI components; taking away all the
          worries of class names and StyleSheet composition.
        </p>
        <p className="font-medium text-xl">Tailwind Merge</p>
        <Link
          href="https://github.com/dcastil/tailwind-merge"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://github.com/dcastil/tailwind-merge
        </Link>
        <p className="italic text-sm">
          Utility function to efficiently merge Tailwind CSS classes in JS
          without style conflicts.
        </p>
        <p className="font-medium text-xl">Radix UI</p>
        <Link
          href="https://www.radix-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://www.radix-ui.com/
        </Link>
        <p className="italic text-sm">
          An open-source UI component library for building high-quality,
          accessible design systems and web apps.
        </p>

        <h3 className="text-2xl font-bold border-b border-gray-300 pb-4">
          Form & Validation
        </h3>
        <p className="font-medium text-xl">React Hook Form</p>
        <Link
          href="https://react-hook-form.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://react-hook-form.com
        </Link>
        <p className="italic text-sm">
          Performant, flexible and extensible forms with easy-to-use validation.
        </p>
        <p className="font-medium text-xl">Zod</p>
        <Link
          href="https://zod.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://zod.dev/
        </Link>
        <p className="italic text-sm">
          Zod is a TypeScript-first schema declaration and validation library.
          I&apos;m using the term &quot;schema&quot; to broadly refer to any
          data type, from a simple string to a complex nested object.
        </p>

        <h3 className="text-2xl font-bold border-b border-gray-300 pb-4">
          Database & ORM
        </h3>
        <p className="font-medium text-xl">MySQL</p>
        <p className="font-medium text-xl">Prisma</p>
        <Link
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://www.prisma.io/
        </Link>
        <p className="italic text-sm">
          Prisma unlocks a new level of developer experience when working with
          databases thanks to its intuitive data model, automated migrations,
          type-safety & auto-completion.
        </p>
        <h3 className="text-2xl font-bold border-b border-gray-300 pb-4">
          Deploy & Production
        </h3>
        <p className="font-medium text-xl">Planetscale</p>
        <Link
          href="https://planetscale.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://planetscale.com/
        </Link>
        <p className="italic text-sm">
          PlanetScale is a MySQL-compatible serverless database that brings you
          scale, performance, and reliability — without sacrificing developer
          experience.
        </p>
        <p className="font-medium text-xl">Vercel</p>
        <Link
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-sm text-gray-500"
        >
          https://vercel.com/
        </Link>
        <p className="italic text-sm">
          Vercel is the platform for frontend developers, providing the speed
          and reliability innovators need to create at the moment of
          inspiration.
        </p>
      </section>
    </main>
  )
}
