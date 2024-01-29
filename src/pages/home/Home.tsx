import { Link } from "react-router-dom";
import landing_page from "../../assets/images/landing_page_new.svg";
import Steve_jobs from "../../assets/images/Steve Jobs.jpg";
import NewAbout from "../about/About";


const blogPosts = [
  {
    id: 1,
    title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://www.harnawainc.com/new-img/about-1.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://www.harnawainc.com/new-img/about-2.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://www.benteac.com/Content/uploads/2020659321/20200728152204b5e35e2a686246fd99d3ecebc396c219.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

]

const Home = () => {
  return (
    <>
      <main className="" id="home">
        {/* <!-- Start block --> */}
        <section className="bg-white">
          <div className="grid max-w-screen-xl px-4 sm:pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:grid-cols-12 lg:pt-28">
            <div className="lg:mt-0 lg:col-span-5 sm:hidden">
              <img src={landing_page} alt="hero image" className='h-auto w-auto' />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7 sm:col-span-7">
              <h1 className="lg:max-w-2xl max-w-lg mb-4 text-4xl font-extrabold leading-none tracking-tighter md:text-5xl xl:text-6xl">Long-term thinking <br />products & brands.</h1>
              <p className="lg:max-w-2xl max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                We're committed to responsible, sustainable, and ethical
                manufacturing. Our small-scale approach allows us to focus on
                quality and reduce our impact. We're doing our best to delay the
                inevitable heat-death of the universe.
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link to="/products/fiberglass_&_polyester_braided_cable" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-[#268F82] border border-[#268F82] rounded-lg sm:w-auto hover:bg-[#268F82] hover:text-white focus:ring-4 focus:ring-gray-100 ">
                  Show all products
                </Link>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 sm:col-span-5 sm:flex">
              <img src={landing_page} alt="hero image" className='h-full w-full' />
            </div>
          </div>
        </section>
        {/* <!-- End block --> */}
        <NewAbout />
        {/* <!-- Start block --> */}
        <section className="bg-white" id='contact'>
          <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div className="col-span-2 mb-8">
              <p className="text-lg font-medium text-purple-600">Trusted Worldwide</p>
              <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Trusted by over 600 million users and 10,000 teams</h2>
              <p className="font-light text-gray-500 sm:text-xl">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
              <div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
                <div>
                  <Link to="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800">
                    Explore Legality Guide
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                </div>
                <div>
                  <Link to="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800">
                    Visit the Trust Center
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
                <h3 className="mb-2 text-2xl font-bold">99.99% uptime</h3>
                <p className="font-light text-gray-500">For Landwind, with zero maintenance downtime</p>
              </div>
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                <h3 className="mb-2 text-2xl font-bold">600M+ Users</h3>
                <p className="font-light text-gray-500">Trusted by over 600 milion users around the world</p>
              </div>
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                <h3 className="mb-2 text-2xl font-bold">100+ countries</h3>
                <p className="font-light text-gray-500">Have used Landwind to create functional websites</p>
              </div>
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                <h3 className="mb-2 text-2xl font-bold">5+ Million</h3>
                <p className="font-light text-gray-500">Transactions per day</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End block --> */}
        {/* <!-- Start block --> */}
        <section className="bg-gray-50">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-2xl">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-6 h-6 rounded-full" src={Steve_jobs} alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900">Steve Jobs</div>
                  <div className="pl-3 text-sm font-light text-gray-500">Former CEO of Apple
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        {/* <!-- End block --> */}
      </main>
    </>
  );
};

export default Home;
