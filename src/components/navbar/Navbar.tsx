import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/images/new balahanuman logo-PhotoRoom.png";
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';

const navigation = {
	categories: [
		{
			id: 'home',
			name: 'Home',
			href: '/'
		},
		{
			id: 'about',
			name: 'About',
			href: '/about'
		},
		{
			id: 'products',
			name: 'Products',
			href: '',
			sections: [
				{
					id: 'fiberglass_&_polyester_braided_cable',
					name: 'Fiberglass & Polyester Braided Cable',
					items: [
						{ name: 'Fiberglass & Polyester Braided Cable', href: '#' },
						{ name: 'Fiberglass Cables', href: '#' },
						{ name: 'Silicon Rubber Cables', href: '#' },
					],
				},
				{
					id: 'enameled_winding_wire',
					name: 'Enameled Winding Wire',
					items: [
						{ name: 'Enameled Aluminum Wire', href: '#' },
						{ name: 'Enameled Copper Wire', href: '#' },
					],
				},
				{
					id: 'electrical_insulation_sheets',
					name: 'Electrical Insulation Sheets',
					items: [
						{ name: 'Fiberglass Epoxy Sheet: FR4 / G10 / G11', href: '#' },
						{ name: 'Glass Epoxy Sheet 3240', href: '#' },
						{ name: 'Press Board', href: '#' },
						{ name: 'Hylam Sheet / Bakelite Sheet', href: '#' },
						{ name: 'SMC Sheet', href: '#' },
						{ name: 'Fiberglass Epoxy Wedges', href: '#' },
						{ name: 'Press Board', href: '#' },
					],
				},
				{
					id: 'electrical_insulating_sleeves_and_tubes',
					name: 'Electrical Insulating sleeves and tubes',
					items: [
						{ name: 'Polyurethane Fiberglass Sleeving (PU)', href: '#' },
						{ name: 'Fire Resistant / Pyro Sleeve', href: '#' },
						{ name: 'Silicone Coated Fiberglass Sleeve', href: '#' },
						{ name: 'Acrylic Fiberglass Sleeving', href: '#' },
						{ name: 'Unvarnished Fiberglass Sleeve', href: '#' },
						{ name: 'Varnished Fiberglass Sleeve F Class', href: '#' },
						{ name: 'SRBP Tubes', href: '#' },
					],
				},
				{
					id: 'electrical_insulation_tapes',
					name: 'Electrical Insulation Tapes',
					items: [
						{ name: 'Cotton Insulation Tapes', href: '#' },
						{ name: 'Fiberglass Tapes', href: '#' },
						{ name: 'Polymide Tape', href: '#' },
						{ name: 'PGMP Tapes', href: '#' },
					],
				},
				{
					id: 'electical_insulation_paper',
					name: 'Electical Insulation Paper',
					items: [
						{ name: 'DuPont Nomex Laminated Paper', href: '#' },
						{ name: 'Laminated Fleece / DMD', href: '#' },
						{ name: 'Saturated Fleece Paper', href: '#' },
						{ name: 'DuPont Nomex', href: '#' },
						{ name: 'Unsaturated Fleece Paper', href: '#' },
						{ name: 'Polyester Film - Electrical Insulation', href: '#' },
					],
				},
				{
					id: 'aramid_paper',
					name: 'Aramid paper',
					items: [
						{ name: 'Pure Aramid Paper (UL approved)', href: '#' },
						{ name: 'Laminated Aramid Paper APA', href: '#' },
					],
				},
				{
					id: 'insulating_varnishes',
					name: 'Insulating Varnishes',
					items: [
						{ name: 'Dr Beck Insulating Varnish', href: '#' },
						{ name: 'Dr. Beck Elmotherm F 50 Varnishes', href: '#' },
						{ name: 'Becktol Red / Grey Varnish', href: '#' },
					],
				},
				{
					id: 'ptfe_wire and_sleeve',
					name: 'PTFE Wire and Sleeve',
					items: [
						{ name: 'PTFE Wire', href: '#' },
						{ name: 'Teflon Cable', href: '#' },
					],
				},
			]
		},
		{
			id: 'certification',
			name: 'Certification',
			href: '/certification'
		},
		{
			id: 'contact',
			name: 'Contact',
			href: '/contact'
		},
		
	]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  const [open, setOpen] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState<string | null>(null);
  const [showSubProductsDropdown, setSubShowProductsDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

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
                      <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                          <Tab.List className="-mb-px px-4">
                            {navigation.categories?.map((item) => (
                              <li key={item.name}>
                                {!item.sections ? (
                                    <Tab
                                      key={item.name}
                                      className={({ selected }) =>
                                        classNames(
                                          // selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                          'flex-1 whitespace-nowrap px-1 py-4 text-base font-medium text-gray-900 hover:border-indigo-600 hover:text-indigo-600 hover:border-b-2'
                                        )
                                      }
                                    >
                                      {item.name}
                                    </Tab>
                                ) : (
                                  <Disclosure as="div">
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button
                                          className={classNames(
                                            'flex items-center w-full text-left rounded-md px-1 py-3 gap-x-3 text-base leading-6 font-medium text-gray-900 hover:border-indigo-600 hover:text-indigo-600'
                                          )}
                                        >
                                          {item.name}
                                          <ChevronRightIcon
                                            className={classNames(
                                              open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                              'ml-auto h-5 w-5 shrink-0'
                                            )}
                                            aria-hidden="true"
                                          />
                                        </Disclosure.Button>
                                        <Disclosure.Panel as="ul" className="mt-1 px-2">
                                          {item.sections.map((subItem) => (
                                            <li key={subItem.name}>
                                              {!subItem.items ? (
                                              <Tab
                                                key={subItem.name}
                                                className={classNames(
                                                    'flex-1 whitespace-nowrap px-1 py-4 text-base font-medium text-gray-900 hover:border-indigo-600 hover:text-indigo-600 hover:border-b-2'
                                                  )
                                                }
                                              >
                                                {subItem.name}
                                              </Tab>
                                              ) : (
                                                <Disclosure as="div">
                                                    <>
                                                      <Disclosure.Button
                                                        className={classNames(
                                                          'flex items-center w-full text-left rounded-md px-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600'
                                                        )}
                                                      >
                                                        {subItem.name}
                                                        <ChevronRightIcon
                                                          className={classNames(
                                                            open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                            'ml-auto h-5 w-5 shrink-0 flex items-center'
                                                          )}
                                                          aria-hidden="true"
                                                        />
                                                      </Disclosure.Button>
                                                      <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                        {subItem.items.map((subProduct) => (
                                                          <li key={subProduct.name}>
                                                            {/* 44px */}
                                                            <Tab
                                                              key={subItem.name}
                                                              className={classNames(
                                                                  'flex-1 items-center whitespace-nowrap overflow-hidden px-3 py-3 text-sm font-medium text-gray-900 hover:border-indigo-600 hover:text-indigo-600 hover:border-b-2'
                                                                )
                                                              }
                                                            >
                                                              {subProduct.name}
                                                            </Tab>
                                                          </li>
                                                        ))}
                                                      </Disclosure.Panel>
                                                    </>
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
                          </ul>
                        </li>
                      </ul>
                    </Tab.Group>
                  </nav>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Desktop View */}
        <header className="">
          {/* Top navigation */}
          <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter">
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
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <div className="flex items-center">
                      <img className="h-12 w-16" src={Logo} alt="logo" />
                      <span className="logo text-md font-light">New Balahanuman Electricals</span>
                    </div>
                  </a>
                </div>

                {/* Flyout menus */}
                <div className="hidden h-full lg:flex">
                  <div className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                    {navigation.categories.map((category) => (
                      <nav key={category.id} className="flex">
                        {!category.sections ? (
                          <div className="relative flex">
                            <NavLink
                              to={category.href}
                              className={classNames(
                                'relative z-10 flex items-center border-b-2 border-transparent text-sm font-medium no-focus-outline',
                              )}
                            >
                              {category.name}
                            </NavLink>
                          </div>
                        ) : (
                          <div
                            onMouseEnter={() => setShowProductsDropdown(category.id)}
                            onMouseLeave={() => setShowProductsDropdown(null)}
                            className="relative flex"
                          >
                            <NavLink
                              to={category.href}
                              className={classNames(
                                'relative z-10 flex items-center border-b-2 border-transparent text-sm font-medium no-focus-outline',
                              )}
                            >
                              {category.name}
                              <span
                                className={classNames(
                                  open ? 'bg-indigo-600' : '',
                                  'absolute inset-x-0 mb-1 -bottom-px h-0.5 transition duration-200 ease-out'
                                )}
                                aria-hidden="true"
                              />
                            </NavLink>
                            {showProductsDropdown && (
                              <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 translate-y-12 px-4">
                                <div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                                  {category.sections?.map((section, index) => (
                                    <React.Fragment key={index}>
                                      <Disclosure>
                                        
                                          <>
                                            <div
                                              onMouseEnter={() => setSubShowProductsDropdown(section.id)}
                                              onMouseLeave={() => setSubShowProductsDropdown(null)}
                                              className="relative flex"
                                            >
                                              <Disclosure.Button
                                                key={section.name}
                                                className={classNames(
                                                  'flex items-center w-full text-left rounded-md px-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600'
                                                )}
                                              >
                                                {section.name}
                                                <ChevronRightIcon
                                                  className={classNames(
                                                    open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                    'ml-auto h-5 w-5 shrink-0 flex items-center'
                                                  )}
                                                  aria-hidden="true"
                                                />
                                              </Disclosure.Button>
                                            </div>
                                            {showSubProductsDropdown === section.id && (
                                              <div className="absolute left-32 z-10 mt-5 flex w-screen max-w-min translate-x-72 -translate-y-16 px-4">
                                                <div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                                                  {section.items.map((item, index:number) => (
                                                    <React.Fragment key={`submenu${section.id}_${index}`}>
                                                      <Disclosure>
                                                        {() => (
                                                          <div className="relative flex">
                                                            <Disclosure.Button
                                                              className={classNames(
                                                                'flex items-center w-full text-left rounded-md px-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600'
                                                              )}
                                                            >
                                                              {item.name}
                                                            </Disclosure.Button>
                                                          </div>
                                                        )}
                                                      </Disclosure>
                                                    </React.Fragment>
                                                  ))}
                                                </div>
                                              </div>
                                            )}
                                          </>
                                      </Disclosure>
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </nav>
                    ))}

                    </div>
                  </div>
                </div>

                {/* Search Desktop View */}
                <div className="flex flex-1 items-center justify-end">
                    <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      Search
                    </a>
                    {/* Help */}
                    <div className="flex items-center lg:ml-8">
                      <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Help
                      </a>
                    </div>
                </div>

                {/* Search Mobile View*/}
                <div className="flex flex-1 items-center justify-end lg:hidden">
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                    <span className="sr-only">Help</span>
                    <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
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
