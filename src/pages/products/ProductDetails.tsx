import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import { subDetailsMenu } from '../../helper/menuItems'
import Product from './Product'

const ProductDetails = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedSubmenu, setSelectedSubmenu] = useState(null)
  const navigate = useNavigate();
  
  const handleClickGetSubMenuItem = (id: any) => {
    navigate(`/product/${id}`);
  }
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter view */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Products</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 border-t border-gray-200">
                    {subDetailsMenu?.map((section: any) => (
                      <Disclosure as="div" key={`sub-${section.url}`} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-xs text-gray-900">{section.title}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.submenu.map((option: any) => (
                                  <div key={option.url} className="flex items-center">
                                    <Link
                                        to={option.url}
                                        className="ml-3 text-xs text-gray-600"
                                        onClick={() => handleClickGetSubMenuItem(option.url)}
                                    >
                                        {option.title}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Desktop view */}
        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-600">Products</h1>

            {/* Sort */}
            <div className="">
               <button className='bg-[#f79d2b] p-2 text-white hover:bg-orange-400'>Get Quote</button>
                <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
                >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {subDetailsMenu?.map((section: any) => (
                  <Disclosure as="div" key={`sub-${section.url}`} className="border-b border-gray-200 py-3">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                            <Disclosure.Button 
                                className="flex w-full items-center justify-between hover:bg-gray-200 py-5 px-1 text-sm text-gray-400 hover:text-gray-500"
                                onClick={() => setSelectedSubmenu(open ? null : section)}
                            >
                            <span className="font-medium text-gray-900">{section.title}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.submenu.map((option: any) => (
                              <div key={option.url} className="flex items-center">
                                <Link
                                  to={option.url}
                                  className="ml-3 text-sm text-gray-600 px-1"
                                  onClick={() => handleClickGetSubMenuItem(option.url)}
                                >
                                  {option.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <Product/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default ProductDetails
