import { FaLinkedin, FaGooglePlus, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import vinit_images from "../../assets/images/vinit_image.png"


const OurTeamMembers = () => {
  return (
    <section className="bg-gray-100 py-20  px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a2940] mb-2">Our Team Members</h2>
          <p className="text-base text-[#555] font-light">
            Exercitation ullamco laboris nisi ut aliquip exa aute irure dolor<br />
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={vinit_images}
                alt="team member"
                className="w-auto h-96 mx-auto"
              />
              <div className="p-6">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#1a2940] mb-1">
                    <Link to="#" className="text-[#1a2940] hover:text-[#df6512] transition-colors duration-300">
                      Vineet Gohel
                    </Link>
                  </h4>
                  <p className="text-sm text-[#999] uppercase mb-3">Director</p>
                </div>
                <ul className="flex justify-center mb-3">
                  <li className="mx-2">
                    <a href="https://twitter.com/" className="text-[#1a2940] text-xl hover:text-[#df6512] transition-colors duration-300">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="https://twitter.com/" className="text-[#1a2940] text-xl hover:text-[#df6512] transition-colors duration-300">
                      <FaGooglePlus />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="https://www.facebook.com/" className="text-[#1a2940] text-xl hover:text-[#df6512] transition-colors duration-300">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="https://twitter.com/" className="text-[#1a2940] text-xl hover:text-[#df6512] transition-colors duration-300">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamMembers;
