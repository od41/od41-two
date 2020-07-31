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

export default function Index({ allProjects }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  
  const projects = allProjects.filter((project) => project.flag === 'project').slice(0,2) // filters out all none project posts and slices all but first 2
  const experiments = allProjects.filter((experiment) => experiment.flag === 'experiment').slice(0,3) // filters out all none experiment posts and slices all but first 2


  return (
    <>
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
              <Experiment
                page={"Experiments"}
                projects={experiments}
                showAll={true}
              />
            )}
            
          </Container>
          
         
      </Layout>
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
  ])

  return {
    props: { allProjects },
  }
}
