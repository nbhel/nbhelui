import CheckList from "../checklist/CheckList";

const TheSmartManCompany = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="ml-4 mr-4 clear-both">
          <div className="h-full w-full clear-both block">
            <section className="relative pt-28 px-0 pb-0 ">
              <div className="static max-w-screen-xl px-4 mx-auto">
                <div className="flex-wrap -mx-4 grid grid-cols-2">
                  <div className="relative mb-12">
                    <div>
                      <div className="relative mb-10 z-10 h2_state_line">
                        <span className="relative block text-sm leading-normal text-[#999] font-normal mb-[10px] uppercase font_mono_sans_serif">
                          New Balahanuman Electricals
                        </span>
                        <h2 className="relative block text-4xl text-[#1a2940] font-bold pl-5 position-relative">
                          <span className="line-left absolute left-0 top-0 h-full bg-[#1a2940] w-1.5"></span>
                          Drawing upon years of expertise and a steadfast
                          dedication to providing top-notch Handyman Solutions
                        </h2>
                      </div>
                      <div className="mt-[30px] relative text-[15px] leading-7 text-[#555] font-light m-0">
                        <p className="relative text-[15px] leading-7 text-[#555] font-normal mb-9">
                          With decades of hands-on experience, our team brings a
                          wealth of expertise to every project. Committed to
                          delivering excellence, we prioritize your needs and
                          ensure top-quality Handyman Solutions tailored to your
                          requirements.
                        </p>
                        <p className="relative text-[15px] leading-7 text-[#555] font-normal mb-9">
                          Backed by years of dedicated service and a steadfast
                          commitment to excellence, we provide comprehensive
                          Handyman Solutions that address all your needs. Our
                          seasoned team's expertise ensures reliable and
                          efficient solutions for every project, delivering
                          results you can trust.
                        </p>
                      </div>
                    </div>
                    <ul className="relative check_ul">
                      <CheckList
                        title="Dedicated and knowledgeable professionals"
                        key={1}
                      />
                      <CheckList
                        title="Offering all jobs guranteed & neatly done"
                        key={2}
                      />
                      <CheckList
                        title="We provide 24/7 on time services"
                        key={3}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSmartManCompany;
