// eslint-disable-next-line jsx-a11y/iframe-has-title

import Banner from "../../components/banner/Banner";

const Contact = () => {
  return (
    <>
      <Banner heading="Contact" title="contact" />
      <section className="text-gray-600 body-font relative bg-black">
        <div className="h-96">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.49887514883204!2d72.59187690492746!3d23.024433026687124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8435fd4173f5%3A0x3953b86d7d877624!2sShree%20Bala%20Hanuman!5e0!3m2!1sen!2sin!4v1703745941770!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* <div className="container px-5 py-12 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-600 text-xl mb-1 font-bold title-font">Contact us</h2>
            <p className="leading-relaxed mb-5 text-gray-500">Please feel free to contact us for your requirement of our products and solutions, as we look forward to a fruitful association with you and expect your valued inquiries.</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-[#EDDDE7] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-[#EDDDE7] bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg">Send message</button>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Contact;
