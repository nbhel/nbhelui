import React, { Fragment, useState } from 'react'
import Logo from "../../assets/images/Black White Minimalist Logo1.jpg";
import MenuItems from './MenuItems';
import { menuItems } from '../../helper/menuItems';
import { Dialog, Disclosure, Tab, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='z-50'>
        {/* Mobile View */}
        <Transition.Root show={isMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMenuOpen}>
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
                      onClick={() => setMenuOpen(false)}
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
                          <li key={`mainMenu-${index}`} className='flex py-2 text-base font-medium text-gray-700'>
                            {!item.submenu ? (
                                <NavLink
                                  to={item.url}
                                  key={item.title}
                                  className='w-full p-2 rounded-sm hover:bg-purple-700 hover:text-[#EDDDE7]'
                                >
                                  {item.title}
                                </NavLink>    
                            ) : (
                              <Disclosure as="div" className="w-full">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      className={classNames(`
                                       ${open ? 'bg-purple-700 text-[#EDDDE7]' : ''} flex item-center hover:bg-purple-700 hover:text-[#EDDDE7] w-full text-left rounded-sm px-1 py-2 gap-x-3 text-base leading-6 font-medium text-gray-700'
                                      `)}
                                    >
                                      <NavLink to={item.url}>
                                        {item.title}
                                      </NavLink>
                                      <ChevronRightIcon
                                        className={classNames(
                                          open ? 'rotate-90 text-[#EDDDE7]' : 'text-gray-400',
                                          'my-auto ml-auto h-5 w-5 shrink-0'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel as="ul" className="ps-2 mt-2">
                                      {item.submenu.map((subItem, index:number) => (
                                        <li key={`submenu-${index}`}>
                                          {!subItem.submenu ? (
                                          <NavLink
                                            to={subItem.url}
                                            key={`submenu-link-${subItem.title}-${index}`}
                                            className={classNames(
                                                'flex item-center w-full text-left rounded-sm px-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:text-[#f79d2b]'
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
                                                      ` ${open ?  'bg-purple-700 text-[#EDDDE7]' : ''} rounded-sm flex items-center w-full text-left px-1 py-3 gap-x-3 text-sm font-medium  hover:bg-purple-700 hover:text-[#EDDDE7]`
                                                    )}
                                                  >
                                                    {subItem.title}
                                                    <ChevronRightIcon
                                                      className={classNames(
                                                        open ? 'rotate-90 text-[#EDDDE7]' : 'text-gray-400',
                                                        'ml-auto h-5 w-5 shrink-0 flex items-center'
                                                      )}
                                                      aria-hidden="true"
                                                    />
                                                  </Disclosure.Button>
                                                  <Disclosure.Panel as="ul">
                                                    {subItem.submenu.map((subProduct, index:number) => (
                                                      <li key={`subProduct-${index}`} className='flex-1 items-center whitespace-normal overflow-hidden px-3 py-3 text-sm font-medium text-black hover:text-[#EDDDE7] hover:bg-purple-700 bg-[#B2A0E9] '>
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

        <header className="fixed w-full z-40 shadow-sm">
            <nav className="bg-white border-gray-200 py-2.5">
                <div className="flex flex-wrap items-center sm:justify-between justify-center max-w-screen-xl px-4 mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="h-6 sm:h-12" alt="Landwind Logo" />
                        <span className="self-center text-sm sm:text-lg font-medium whitespace-nowrap text-black">
                          New Balahanuman Electricals
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="/" className="text-gray-800 hover:bg-[#268F82] hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2">Help</Link>
                        <Link to="https://themesberg.com/product/tailwind-css/landing-page" className="text-white bg-purple-700 hover:text-purple-800 hover:bg-white hover:border hover:border-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 me-1 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">Download</Link>
                        <button
                          onClick={toggleMenu}
                          data-collapse-toggle="mobile-menu-2"
                          type="button"
                          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                          aria-controls="mobile-menu-2"
                          aria-expanded={isMenuOpen}
                        >
                          <span className="sr-only">Toggle main menu</span>
                          <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                          </svg>
                          {/* <svg className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg> */}
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-3 lg:mt-0">
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
            </nav>
        </header>
      </div>
    </>
  )
}

export default App;
