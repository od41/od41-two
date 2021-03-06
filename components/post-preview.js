import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import { motion } from 'framer-motion';


export default function PostPreview({
  title,
  coverImage,
  thumbnail,
  date,
  excerpt,
  details,
  slug,
  link
}) {

  const toolsMotion = {
    rest: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: 'backInOut'
      }
    }
  }

  const overlayMotion = {
    rest: {
      opacity: 0
    },
    hover: {
      opacity: 0.6
    }
  }

  const backgroundOverlay = { width: '112%', height: '100%', background: 'linear-gradient(0deg, #000 0%, rgba(0,0,0,0.3) 33%,rgba(0,0,0,0) 100%)', position: 'absolute', bottom: '0', left: '0', opacity: '0.1', translateX: '-5%', zIndex: '0' }

  if (true) {

  }
  return (

    <div >
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="mb-5" style={{ position: 'relative', cursor: 'crosshair' }}>
        <CoverImage slug={slug} title={title} src={thumbnail} />

        <motion.div variants={toolsMotion} className="text-lg mb-6" style={{ position: 'absolute', bottom: '0', zIndex: '10' }}>
          <h5 className="font-display uppercase text-xs text-gray-200" >Tools & Methods</h5>
          <p className="font-body text-xs uppercase text-white font-extralight mb-3">{details.method}</p>

          {link.name != '' ? <a href={link.url} className="capitlize font-body font-bold text-sm px-4 py-2 bg-white rounded-md focus:outline-sm hover:bg-gray-300" target="blank">{link.name}
          </a> : null}

        </motion.div>
        <motion.div variants={overlayMotion} style={backgroundOverlay}></motion.div>
      </motion.div>
      <h3 className="font-display uppercase text-3xl mb-3 leading-snug">
        {/* <Link as={`/posts/${slug}`} href="/posts/[slug]"> */}
        <a className="hover:underline">{title}</a>
        {/* </Link> */}
      </h3>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  )
}
