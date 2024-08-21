import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Home', href: '/', subItems: [] },
  { name: 'About us', href: '/story', subItems: ['Our Story', 'Our Values'] },
  { name: 'Business Services', href: '/test', subItems: ['Consulting', 'Strategy', 'Solutions'] },
  { name: 'Tax Services', href: '/tax', subItems: ['Advisory', 'Compliance', 'Planning'] },
  { name: 'Accounting Services', href: '/Train', subItems: ['Bookkeeping', 'Year End Accounts ', 'More'] },
  { name: 'Contact us', href: '/contact', subItems: [] }
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-[#3b445f] shadow-sm z-50 h-18">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex justify-between items-center h-24">
              {/* Desktop Logo */}
              <div className="hidden lg:block">
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{ height: "170px", width: "150px" }}
                />
              </div>
              
              {/* Mobile Logo */}
              <div className="block lg:hidden">
                <img
                  src="/MobileLogo.png"
                  alt="Mobile Logo"
                  style={{ height: "80px", width: "70px" }}
                />
              </div>

              <div className="flex-grow flex justify-center">
                <div className="hidden lg:flex space-x-0"> {/* Use lg instead of md */}
                  {navigation.map(({ name, href, subItems }) => (
                    <div className="relative group" key={name}>
                      <Link href={href}>
                        <a className="inline-flex items-center px-8 py-2 font-medium rounded-md text-white hover:text-[#475374] duration-100">
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
                <div className="flex lg:hidden items-center"> {/* Use lg instead of md */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-blue-900 duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-9 w-9" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden border-t-2 border-white overflow-y-auto max-h-screen">
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
