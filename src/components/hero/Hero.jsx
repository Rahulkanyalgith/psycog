import React from "react";

import { Link } from "react-router-dom";


function Hero() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              We Build the communites,Groups and Clubs sessions
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Let live in the world where we connect to teh people share the
              experience
            </p>
            <a
              
            
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
           
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
           
           
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
            Let's Connect
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4="
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <div class="flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 ">
        <div class="flex-col items-center justify-center ">
          <div class="flex">
            <div class="flex md:flex-row flex-col p-4 space-x-4 space-y-4 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
              <div class="border rounded-xl h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl">
                <div class="flex-col space-y-2 items-center px-0 md:px-6">
                  <div class="text-5xl font-bold">25%</div>
                  <div class="text-sm font-medium text-gray-500">
                  Anxiety disorders grew from about 298 million people affected to 374 million
                  </div>
                </div>
              </div>
              <div class="border rounded-xl h-40 w-[70%] md:w-1/4 flex items-center justify-center px-6 bg-white shadow-xl">
                <div class="flex-col space-y-2">
                  <div class="text-5xl font-bold">70 million</div>
                  <div class="text-sm font-medium text-gray-500">
                  Close to 60 to 70 million people in India suffer from common and severe mental disorders.
                  </div>
                </div>
              </div>
              <div class="border rounded-xl h-40 w-[70%] md:w-1/4 flex items-center justify-center px-6 bg-white shadow-xl">
                <div class="flex-col space-y-2">
                  <div class="text-5xl font-bold">2.6 lakh</div>
                  <div class="text-sm font-medium text-gray-500">
                  India is the world's suicide capital with over 2.6 lakh cases of suicide in a year
                  </div>
                </div>
              </div>
              <div class="border rounded-xl h-40 w-[70%] md:w-1/4 flex items-center justify-center px-6">
                <div class="flex-col space-y-2">
                  <div class="text-3xl font-bold">Join Our Communities</div>
                  <div class="text-sm font-medium text-gray-500">
                    Join us today we can support on the path to healing and recovery
                  </div>
                  <div class="flex">
                    <div class="bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 p-0.5 rounded-md">
                      <div class=" text-sm bg-white py-1 font-bold px-2 rounded-md cursor-pointer ">
                        {" "}
                        Join well being
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default Hero;
