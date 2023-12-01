import { NewspaperIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const supportLinks = [
  {
    name: 'STRONG SERVICE OFFERINGS',
    href: '/contact',
    imageUrl: 'https://www.harnawainc.com/new-img/about-1.jpg',
    description:'Count on the reliability of our experienced team and supply chain, with same-day dispatch and next-day delivery options at various domestic locations and express services for international shipments.',
    icon: NewspaperIcon,
  },
  {
    name: 'EFFORTLESS ORDERING',
    href: '/contact',
    imageUrl:'https://www.harnawainc.com/new-img/about-2.jpg',
    description: 'Order by phone / mail / text or at a branch, with the contact details provided or Harnawa’s personalized web experience and live chat.',
    icon: NewspaperIcon,
  },
  {
    name: 'STRONG SERVICE OFFERINGS',
    href: '/contact',
    imageUrl: 'https://www.benteac.com/Content/uploads/2020659321/20200728152204b5e35e2a686246fd99d3ecebc396c219.jpg',
    description:'Count on the reliability of our experienced team and supply chain, with same-day dispatch and next-day delivery options at various domestic locations and express services for international shipments.',
    icon: NewspaperIcon,
  },
]

const About = () => {
  return (
    <div className="bg-gray-200">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://www.benteac.com/Content/uploads/2020659321/20200728152204b5e35e2a686246fd99d3ecebc396c219.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">About</h1>
          <p className="mt-6 max-w-7xl text-xl text-gray-300">
          New Balahanuman Electricals is India's #1 source for electrical insulation materials of industrial-grade products. For over 45 years, New Balahanuman Electricals has built a tradition of serving businesses, big and small, with effortless ways to get the products and services they need. We do this by providing a huge selection of electrical insulation products. Our world-class supply chain means we can get those products across the country with next-day delivery and express international shipments. New Balahanuman Electricals backs it all up with 24/7 customer service and free technical support from industry experts. And if digital is your thing, www.nbhel.com offers powerful online approach that makes ordering and getting in touch fast, easy and ready to go with help of our live chatting whenever and wherever you are. For all the things you do to get the job done, we got your back.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 md:gap-x-6 lg:gap-y-0">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-gray-50 shadow-xl">
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-[#F79D2B] p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <img className="object-cover w-full h-48 md:h-64 lg:h-80 shadow-md border-t rounded-lg" src={link.imageUrl} alt={link.imageUrl} />
                <h3 className="text-xl font-medium text-gray-900 py-3">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-100 p-6 md:px-8">
                <Link to={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About