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

import useWindowSize from '../hooks/useWindowSize'

export default function Index({ allProjects }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  
  const projects = allProjects.filter((project) => project.flag === 'project').slice(0,2) // filters out all none project posts and slices all but first 2
  const experiments = allProjects.filter((experiment) => experiment.flag === 'experiment').slice(0,3) // filters out all none experiment posts and slices all but first 2

  // hook
  const size = useWindowSize();

  // REF
  const app = useRef();
  const scrollContainer = useRef();

  const smoothConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScrolling());
    console.log(scrollContainer.current)

    window.addEventListener("scroll", smoothScrolling);
    // return () => window.removeEventListener("scroll", smoothScrolling);
  }, [])

  const smoothScrolling = () => {
    smoothConfig.current = window.scrollY;
    smoothConfig.previous += (smoothConfig.current - smoothConfig.previous) * smoothConfig.ease;
    smoothConfig.rounded = Math.round(smoothConfig.previous * 100) / 100;

    // variables
    const difference = smoothConfig.current - smoothConfig.rounded;
    const acceleration = difference / size.width; // why divide by width of window though??
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    // 
    // scrollContainer.current.style.transform = `translate3d(0, -${smoothConfig.rounded}px, 0) skewY(${skew}deg)`;
    scrollContainer.current.style.transform = `translate3d(0, -${smoothConfig.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => smoothScrolling());
  }


  return (
    <>
    <div ref={app} className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <Layout>
          <Head>
            <title>{CMS_NAME}</title>
          </Head>
          
             <Container>
            <div ref={scrollContainer} className="scroll">
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
            </div>
            
          </Container>
          
         
      </Layout>
      </div>
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
