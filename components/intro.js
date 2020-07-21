import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex flex-wrap md:w-2/4 mt-16 mb-16 md:mb-12">
      <h1 className="font-display text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Welcome...
      </h1>
      <h4 className="font-body text-left text-lg mt-5 ">
        I'm Odafe, a designer, developer and thinker in Lagos, Nigeria.
        You can learn more about me and my work here.
        
      </h4>
    </section>
  )
}
