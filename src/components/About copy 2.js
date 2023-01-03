import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col ">
        <div class>
          <div class>
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div class="sm:max-w-lg">
                <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
                  Hi, I'm Sprih.
                  <br className="hidden lg:inline-block" />I am a wildlife
                  conservationist, and a data scientist.
                </h1>
                <div class="lg:py-16">
                  <article class="space-y-4 text-white-600">
                    <p>
                      In over nine years of experience in wildlife research and
                      landscape-level conservation efforts, I have acted as a
                      liaison and have worked in collaboration with governmental
                      organizations, non-governmental organizations, and
                      communities as stakeholders. I hold a comprehensive
                      experience in conceiving, implementing, and leading
                      strategic landscape conservation initiatives using
                      science-based and analytical approaches in India, and
                      United States. A common theme of my research is
                      understanding how wildlife responds to changing
                      environmental conditions. My research in general focuses
                      on understanding links between population, and
                      community-level processes of wildlife species, which in
                      turn can be used to help inform conservation and
                      management decisions. My research has a strong
                      quantitative component and I use both long-term monitoring
                      data and contemporary data analysis methods to address
                      questions related to population ecology, spatial ecology,
                      and species interactions.
                    </p>
                  </article>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                >
                  Past and Ongoing Projects
                </a>
              </div>
              <div>
                <div class="absolute transform sm:right-1/4 sm:top-0 sm:translate-x-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 object-right">
                  <div class="h-96 w-102 rounded-lg sm:opacity-0 lg:opacity-100 object-right">
                    <img
                      src="./Untitled design 2.png"
                      alt=""
                      class="h-full w-full object-cover"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
