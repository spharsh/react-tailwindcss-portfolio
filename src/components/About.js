import React from "react";

export default function About() {
  return (
    <section
      id="about"
      class="overflow-hidden bg-black-50 sm:grid sm:grid-cols-2 sm:items-center"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24 flex-col">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-2xl font-bold text-white-900 md:text-3xl">
            Hi, I'm Sprih.
            <br className="hidden lg:inline-block" />I am a wildlife
            conservationist, and a data scientist.
          </h2>

          <p class="hidden text-white-500 md:mt-4 md:block">
            In over nine years of experience in wildlife research and
            landscape-level conservation efforts, I have acted as a liaison and
            have worked in collaboration with governmental organizations,
            non-governmental organizations, and communities as stakeholders. I
            hold a comprehensive experience in conceiving, implementing, and
            leading strategic landscape conservation initiatives using
            science-based and analytical approaches in India, and United States.
            A common theme of my research is understanding how wildlife responds
            to changing environmental conditions. My research in general focuses
            on understanding links between population, and community-level
            processes of wildlife species, which in turn can be used to help
            inform conservation and management decisions. My research has a
            strong quantitative component and I use both long-term monitoring
            data and contemporary data analysis methods to address questions
            related to population ecology, spatial ecology, and species
            interactions.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Past and Ongoing Projects
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="./Untitled design 2.png"
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
}
