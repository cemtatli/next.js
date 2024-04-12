type WelcomeTextProps = {}

const WelcomeText: React.FC<WelcomeTextProps> = ({}) => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-4xl leading-tight">
          Next.js 14 Starter Kit with TypeScript, Tailwind CSS, Husky and other goodies
        </h1>
        <p className="text-lg tracking-tight text-zinc-400">
          It is a repo that I opened because I got bored of making the same configuration over and over again in my own
          projects.
        </p>
        <a target="_blank" className="hover:underline" href="https://github.com/cemtatli/next.js">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default WelcomeText
