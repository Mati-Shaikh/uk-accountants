import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/story' },
  { name: 'Sectors We Serve', href: '/test' },
  { name: 'Tax Services', href: '/tax' },
  { name: 'Accounting Services', href: '/Train' },
  { name: 'Contact us', href: '/contact' }
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-[#3b445f] shadow-sm z-50 h-18">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex justify-between items-center h-24">
              {/* Desktop Logo */}
              <div className="hidden lg:block">
                <Link href="/">
                  <a>
                    <img
                      src="/Logo1.png"
                      alt="Logo"
                      className="h-[90px] w-[100px] xl:h-[90px] xl:w-[100px]"
                    />
                  </a>
                </Link>
              </div>

              {/* Mobile Logo */}
              <div className="block lg:hidden">
                <Link href="/">
                  <a>
                    <img
                      src="/Logo1.png"
                      alt="Mobile Logo"
                      style={{marginLeft:"20px"}}
                      className="h-[80px] w-[70px]"
                    />
                  </a>
                </Link>
              </div>

              <div className="flex-grow mr-12 flex justify-center">
                <div className="hidden lg:flex space-x-12 lg:mr-24">
                  {navigation.map(({ name, href }) => (
                    <Link href={href} key={name}>
                      <a className={`inline-flex items-center py-2 font-medium rounded-md text-white hover:text-[#475374] duration-100
                        ${'text-sm' && 'xl:text-base' && '2xl:text-lg'}`}>
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex lg:hidden items-center">
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
              {navigation.map(({ name, href }) => (
                <Link href={href} key={name}>
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
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
