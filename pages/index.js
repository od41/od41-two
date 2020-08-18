import {useEffect, useRef} from 'react';

import Container from '../components/container'
import Work from '../components/work'
import Experiment from '../components/experiment'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Header from '../components/header'
import { CMS_NAME } from '../lib/constants'
import { motion } from 'framer-motion';

import { growIn } from '../animations/animations'

export default function Index({ allProjects }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  
  const projects = allProjects.filter((project) => project.featured === 'featured') // filters out all none project posts and slices all but first 2
  const experiments = allProjects.filter((experiment) => experiment.flag === 'experiment').slice(0,3) // filters out all none experiment posts and slices all but first 2


  return (
    <>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Layout>
          <Head>
            <title>{CMS_NAME}</title>
          </Head>
          <Container>
            <Header />
            <Intro />

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
            {projects.length > 0 && (
                <Work page={"Projects"} projects={projects} showAll={true} />
            )}
            {experiments.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <Experiment
                  page={"Experiments"}
                  projects={experiments}
                  showAll={true}
                />
              </motion.div>
            )}
          </Container>
        </Layout>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllPosts([
    'title',
    'date',
    'slug',
    'details',
    'coverImage',
    'thumbnail',
    'excerpt',
    'flag',
    'featured',
  ])

  return {
    props: { allProjects },
  }
}
