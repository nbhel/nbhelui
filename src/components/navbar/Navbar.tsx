import React, { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/images/new balahanuman logo-PhotoRoom.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import MenuItems from './MenuItems';
import { menuItems } from '../../helper/menuItems';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div>
        {/* Mobile View */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <Tab.Group as="div" className="mt-2">
                      <Tab.List as='ul' className="-mb-px px-4 -mx-2">
                        {menuItems?.map((item, index:number) => (
                          <li key={`mainMenu-${index}`} className='flex-1 px-1 py-4 text-base font-medium text-gray-700 hover:text-[#f79d2b]'>
                            {!item.submenu ? (
                                <NavLink
                                  to={item.url}
                                  key={item.title}
                                  className=''
                                >
                                  {item.title}
                                </NavLink>    
                            ) : (
                              <Disclosure as="div">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      className={classNames(
                                        'flex items-center w-full text-left rounded-md px-1 py-0 gap-x-3 text-base leading-6 font-medium text-gray-700 hover:text-[#f79d2b]'
                                      )}
                                    >
                                      <NavLink to={item.url}>
                                        {item.title}
                                      </NavLink>
                                      <ChevronRightIcon
                                        className={classNames(
                                          open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                          'ml-auto h-5 w-5 shrink-0'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel as="ul" className="mt-1 px-2">
                                      {item.submenu.map((subItem, index:number) => (
                                        <li key={`submenu-${index}`}>
                                          {!subItem.submenu ? (
                                          <NavLink
                                            to={subItem.url}
                                            key={`submenu-link-${subItem.title}-${index}`}
                                            className={classNames(
                                                'flex -center w-full text-left rounded-md px-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:text-[#f79d2b]'
                                              )
                                            }
                                          >
                                            {subItem.title}items
                                          </NavLink>
                                          ) : (
                                            <Disclosure as="div">
                                              {({ open }) => (
                                                <>
                                                  <Disclosure.Button
                                                    className={classNames(
                                                      'flex items-center w-full text-left rounded-md ps-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:text-[#f79d2b] '
                                                    )}
                                                  >
                                                    {subItem.title}
                                                    <ChevronRightIcon
                                                      className={classNames(
                                                        open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                        'ml-auto h-5 w-5 shrink-0 flex items-center'
                                                      )}
                                                      aria-hidden="true"
                                                    />
                                                  </Disclosure.Button>
                                                  <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                    {subItem.submenu.map((subProduct, index:number) => (
                                                      <li key={`subProduct-${index}`} className='flex-1 items-center whitespace-normal overflow-hidden px-3 py-3 text-sm font-medium text-gray-900 hover:text-[#f79d2b] '>
                                                        <Link
                                                          to={subProduct.url}
                                                          key={`subProduct-link-${index}`}
                                                        >
                                                          {subProduct.title}
                                                        </Link>
                                                      </li>
                                                    ))}
                                                  </Disclosure.Panel>
                                                </>
                                              )}
                                            </Disclosure>
                                          )}
                                        </li>
                                      ))}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            )}
                          </li>
                        ))}
                      </Tab.List>
                    </Tab.Group>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Desktop View & Navbar */}
        <header className="shadow-sm bg-white text-gray-800">
          <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="/">
                    <span className="sr-only">Your Company</span>
                    <div className="flex items-center">
                      <img className="h-12 w-16" src={Logo} alt="logo" />
                      <span className="text-[#d48442] text-md font-light">New Balahanuman Electricals</span>
                    </div>
                  </a>
                </div>

                {/* Flyout menus */}
                <div className="hidden h-full lg:flex">
                  <div className="inset-x-0 bottom-0 px-4 flex h-full justify-center space-x-8">
                      <ul className="menus flex items-center flex-wrap list-none">
                        {menuItems.map((menu, index) => {
                          const depthLevel = 0;
                            return (
                              <MenuItems
                              items={menu}
                              key={index}
                              depthLevel={depthLevel}
                              />
                            );
                        })}
                      </ul>
                  </div>
                </div>

                {/* Search & help Desktop View */}
                <div className="flex flex-1 items-center justify-end">
                    <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-800 block">
                      Search
                    </a>
                    <div className="flex items-center ml-8">
                      <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-800 block">
                        Help
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}

export default App;
