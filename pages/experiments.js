import Container from '../components/container'
import Work from '../components/work'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Header from '../components/header'
import { CMS_NAME } from '../lib/constants'

export default function Experiments({ allProjects }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const projects = allProjects.filter((project) => project.flag === 'experiment') // hide posts without the "experiment" flag
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          <Header />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {projects.length > 0 && <Work page={'Experiments'} projects={projects}  showAll={false}/>}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = getAllPosts([
    'title',
    'date',
    'slug',
    'details',
    'coverImage',
    'excerpt',
    'flag',
  ])

  return {
    props: { allProjects },
  }
}
