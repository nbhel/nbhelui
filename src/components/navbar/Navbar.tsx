import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/images/new balahanuman logo-PhotoRoom.png";

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
			href: '/products',
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

const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
]
const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
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
      <header className="relative overflow-hidden">
        {/* Top navigation */}
        <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter">
          <div className="mx-auto max -w-7xl px-4 sm:px-6 lg:px-8">
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
                <Popover.Group className="inset-x-0 bottom-0 px-4">
                  <div className="flex h-full justify-center space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'text-indigo-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-900',
                                  'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium cursor-pointer'
                                )}
                              >
                                {category.name}
                                <span
                                    className={classNames(
                                      open ? 'bg-indigo-600' : '',
                                      'absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out'
                                    )}
                                    aria-hidden="true"
                                  />
                              </Popover.Button>
                            </div>

                            {category.sections ? 
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel className=" absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-10 translate-y-12 px-4">
                                  <div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                                  <Tab.Group as="div" className="mt-2">
                                    {category.sections?.map((item) => (
                                      <>
                                          {!item.items ? (
                                          <Tab
                                            key={item.name}
                                            className={classNames(
                                                'flex-1 whitespace-nowrap px-1 py-4 text-base font-medium text-gray-900 hover:border-indigo-600 hover:text-indigo-600 hover:border-b-2'
                                              )
                                            }
                                          >
                                            {item.name}
                                          </Tab>
                                          ) : (
                                            <Disclosure as="div">
                                                <>
                                                  <Disclosure.Button
                                                    className={classNames(
                                                      'flex items-center w-full text-left rounded-md px-1 py-3 gap-x-3 text-sm leading-6 font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600'
                                                    )}
                                                  >
                                                    {item.name}
                                                    <ChevronRightIcon
                                                      className={classNames(
                                                        open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                        'ml-auto h-5 w-5 shrink-0 flex items-center'
                                                      )}
                                                      aria-hidden="true"
                                                    />
                                                  </Disclosure.Button>
                                                  <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                    {item.items.map((subProduct) => (
                                                      <li key={subProduct.name}>
                                                        {/* 44px */}
                                                        <Tab
                                                          key={item.name}
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
                                      </>
                                    ))}
                                  </Tab.Group>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            : null }
                          </>
                        )}
                      </Popover>
                    ))}
                  </div>
                </Popover.Group>
              </div>

              {/* Search */}
              
              <div className="flex flex-1 items-center justify-end">
                  <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                    Search
                  </a>

                  <div className="flex items-center lg:ml-8">
                    {/* Help */}
                    <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      Help
                    </a>
                  </div>
              </div>
              <div className="flex flex-1 items-center justify-end lg:hidden">
                {/* Search */}
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

        {/* Hero section */}
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't
                care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
