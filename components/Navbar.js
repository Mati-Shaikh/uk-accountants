import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const navigation = [
  { name: 'Home', href: '/', subItems: [] },
  { name: 'About us', href: '/story', subItems: ['Our Story', 'Our Values'] },
  { name: 'Business Services', href: '/test', subItems: ['Consulting', 'Strategy', 'Solutions'] },
  { name: 'Tax Services', href: '/test', subItems: ['Advisory', 'Compliance', 'Planning'] },
  { name: 'Training', href: '/test', subItems: ['Workshops', 'Courses', 'Webinars'] },
  { name: 'Contact us', href: '/test', subItems: [] }
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-sky-500 shadow-sm z-50 h-18">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex justify-between items-center h-24">
              <div className="flex items-center">
                <span>
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={55}
                    height={47}
                  />
                </span>
              </div>

              <div className="flex-grow flex justify-center">
                <div className="hidden md:flex space-x-0">
                  {navigation.map(({ name, href, subItems }) => (
                    <div className="relative group" key={name}>
                      <Link href={href}>
                        <a className="inline-flex items-center px-8 py-2 font-medium rounded-md text-white hover:text-blue-500 duration-100">
                          {name}
                        </a>
                      </Link>
                      {subItems.length > 0 && (
                        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md">
                          <div className="py-1">
                            {subItems.map((item) => (
                              <Link href={href} key={item}>
                                <a className="block px-8 py-4 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex md:hidden items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-blue-900 duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:flex items-center ml-8">
                  <Link href="/blog">
                    <a className="inline-flex items-center px-8 py-2 font-medium rounded-md text-white hover:text-blue-900 duration-300">
                      <Image
                        src="/blog-logo.svg"
                        alt="Blog Logo"
                        width={24}
                        height={24}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden border-t-2 border-white overflow-y-auto max-h-screen">
            <div className="px-10 py-8 space-y-8">
              {navigation.map(({ name, href, subItems }) => (
                <div key={name}>
                  <Link href={href}>
                    <Disclosure.Button
                      as="a"
                      className="group flex justify-between cursor-pointer"
                    >
                      <span className="text-white font-medium group-hover:translate-x-2 duration-300">
                        {name}
                      </span>
                      <ChevronRightIcon className="text-white group-hover:text-blue-900 block h-7 w-7 duration-300" />
                    </Disclosure.Button>
                  </Link>
                  {subItems.length > 0 && (
                    <div className="pl-8 mt-2">
                      {subItems.map((item) => (
                        <Link href={href} key={item}>
                          <a className="block px-4 py-2 text-sm text-white hover:bg-sky-600">{item}</a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="py-6">
                <Link href="/blog">
                  <a className="w-full inline-flex items-center justify-center px-8 py-2 font-medium rounded-md text-white hover:text-blue-900 duration-300">
                    <Image
                      src="/blog-logo.svg"
                      alt="Blog Logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
