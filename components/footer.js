import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

import { Dribble, Github } from '@icon-park/react';
import { Linkedin } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="font-body py-16 flex flex-col md:flex-row items-center justify-between">
          <h5 className="text-xl lg:text-2xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            &copy; Odafe Aror 2020-2021.
          </h5>
          <div className="flex flex-col md:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/od41"
              className="flex items-center mx-3 hover:text-gray-500 text-black py-3 w-50 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <Github theme="filled" size="1.8em" className="mr-2" />Github
            </a>
            <a
              href="https://dribbble.com/od41"
              className="flex items-center mx-3 hover:text-gray-500 text-black py-3 w-50 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <Dribble theme="filled" size="1.8em" className="mr-2" /> Dribbble
            </a>
            <a
              href="https://www.linkedin.com/in/odafe-aror/"
              className="flex items-center mx-3 hover:text-gray-500 text-black py-3 w-50 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <Linkedin style={{ width: '1.6em', height: '1.6em', }} className="mr-2" />LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
