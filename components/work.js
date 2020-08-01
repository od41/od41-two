import PostPreview from '../components/post-preview'
import Link from 'next/link'
import { motion } from 'framer-motion'

import {growIn, fadeUp} from '../animations/animations'

export default function Work({ page, projects, showAll }) {
  return (
    <motion.div initial="initial" animate="animate">
      <section>
        <div className="flex flex-row flex-wrap justify-between items-center">
          <motion.h2 initial="initial" animate="animate" variants={fadeUp} className="font-display mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            {page}
          </motion.h2>
          {showAll ? (
            <motion.div initial="initial" animate="animate" variants={fadeUp} className="text-lg uppercase font-bold font-body hover:underline">
              <Link href={"/" + page.toLowerCase()}>See all</Link>
            </motion.div>
          ) : (
            ""
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
          {projects.map((project) => (
            <motion.div key={project.slug} initial="initial" animate="animate" variants={growIn} whileTap={{scale:.99}}>
              <PostPreview
              
              title={project.title}
              coverImage={project.coverImage}
              thumbnail={project.thumbnail}
              date={project.date}
              details={project.details}
              slug={project.slug}
              excerpt={project.excerpt}
            />
            </motion.div>
            
          ))}
        </div>
      </section>
    </motion.div>
  );
}
