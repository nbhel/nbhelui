import Banner from "../../components/banner/Banner";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

interface IContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<IContactFormData> = (data) => {
    setIsLoading(true);
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "New Balahanuman Electronics",
      current_year: new Date().getFullYear(),
      message: data.message,
    };

    emailjs
      .send(
        "service_459zlag",
        "template_6mrlz2b",
        templateParams,
        "pzHbxfI3AVQ0nv0nx"
      )
      .then((response: any) => {
        reset();
        Swal.fire({
          icon: "success",
          text: "Thank you for contacting us! Your message has been successfully submitted. We'll get back to you as soon as possible.",
        });
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Email send error:", error);
        reset();
        setIsLoading(false);
      });
  };

  return (
    <>
      <Banner heading="Contact" title="contact" />
      <section className="text-gray-600 body-font relative bg-black">
        <div className="container px-5 py-12 mx-auto flex flex-col ">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md mb-8 lg:mb-0 mr-10">
            <h2 className="text-gray-600 text-xl mb-1 font-bold title-font">
              Contact us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-500">
              Please feel free to contact us for your requirement of our
              products and solutions, as we look forward to a fruitful
              association with you and expect your valued inquiries.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name must contain only letters and spaces",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={value}
                      onChange={onChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  )}
                />
                <span className="text-red-500">
                  {errors.name && errors.name.message}
                </span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter valid email",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={value}
                      onChange={onChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  )}
                />
                <span className="text-red-500">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <Controller
                  name="message"
                  control={control}
                  rules={{
                    required: "Message is required",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <textarea
                      id="message"
                      name="message"
                      value={value}
                      onChange={onChange}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  )}
                />
                <span className="text-red-500">
                  {errors.message && errors.message.message}
                </span>
              </div>
              <button
                className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-[#3a4b9c] rounded text-lg"
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
          <div className="lg:w-2/3 md:w-1/2">
            <div className="">
              <div className="absolute inset-0 bg-gray-300">
                <iframe
                  title="_"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.49887514883204!2d72.59187690492746!3d23.024433026687124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8435fd4173f5%3A0x3953b86d7d877624!2sShree%20Bala%20Hanuman!5e0!3m2!1sen!2sin!4v1703745941770!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
