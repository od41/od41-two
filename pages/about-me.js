import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import { CMS_NAME } from '../lib/constants'

export default function AboutMe({  }) {
  
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          <Header />
          <section>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
              I like to figure out how things are made, and sometimes make
              things myself. Slightly scatterbrained and comfortable with
              ambiguity, I enjoy discovering what makes things tick. I’ve built
              a diagnostic system, managed an editorial, published a magazine,
              led a group of community service volunteers, played amateur
              basketball, recited poetry, designed logos, built websites and
              written the occasional short story. That said when asked, “what do
              you do?” I say “I’m a designer.” That’s it.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
              <img src='assets/images/odafe-aror-photo.jpg' alt='Odafe Aror' className='shadow-small hover:shadow-medium transition-shadow duration-200' />
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}