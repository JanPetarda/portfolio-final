"use client"
import React from "react";
import Link from "next/link";
import GithubIcon from "../public/github.svg"
import LinkedIcon from "../public/linkedin-logo-2430.svg"
import Image from "next/image";
import { useRef, useState } from "react";

const EmailSection = () => {

  const formRef = useRef(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONdata,
            }
            const response = await fetch(endpoint, options);
            const resData = await response.json();
            console.log(resData)
            if (response.status === 200) {
                console.log("Message sent.");
                formRef.current.reset(); // Reset the form
                setEmailSubmitted(true)
            }
            setTimeout(()=> {
              setEmailSubmitted(false)
            },3000)

    }


    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4">
           <div>
                <h5 className="text-3xl font-bold text-white my-2">Let&apos;s <span className="text-purple-500">Connect</span></h5>
                <p className="text-[#ADB7BE] mb-10 max-w-md text-xl">
                        {" "}
                    Feel free to ask me questions about my work, or just message me to say hi! 
                    I&apos;m always open to new opportunities, ideas, and meaningful conversations. 
                    Feel free to reach out through the contact form below, and let&apos;s create something amazing together or simply share our thoughts.

                </p>
                
                <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/JanPetarda" >
                    <Image src={GithubIcon} alt="GitHub Icon" className="w-12 rounded hover:scale-110 ease-in-out duration-300" />
                </Link>
                <Link href="https://linkedin.com/in/maciej-sitarski-923653295">
                    <Image src={LinkedIcon} alt="Linkedin Icon" className="w-10 rounded hover:scale-110 ease-in-out duration-300"/>
                </Link>


                </div>
            </div> 
            <div>
            <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 active:bg-purple-900 text-white font-medium py-2.5 px-5 rounded-lg w-full "
            >
              Send Message
            </button>
          </form>
          {emailSubmitted ? <p className="text-green-300 mt-4">Email has been sent</p> : null}
            </div> 
        </section>
    )
}

export default EmailSection;