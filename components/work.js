import PostPreview from '../components/post-preview'
import Link from 'next/link'

export default function Work({ page, projects, showAll }) {
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-between items-center">
        <h2 className="font-display mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          {page}
        </h2>
        {showAll ? (
          <div className="text-lg uppercase font-bold font-body hover:underline">
            <Link href={"/" + page.toLowerCase()}>See all</Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {projects.map((project) => (
          <PostPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            thumbnail={project.thumbnail}
            date={project.date}
            details={project.details}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
