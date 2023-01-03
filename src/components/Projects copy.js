import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <section id="projects">
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Projects
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              A brief description of different projects that I have either
              worked on or is ongoing
            </p>
          </div>
        </div>
      </section>

      <div class="bg-white">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tiger Conservation
            </h2>
            <p class="mt-4 text-gray-500">
              In collaboration with government, non-government, and communities
              worked towards maintaining functionality of corridors in central
              India. Designed and conducted studies on connectivity between
              different tiger reserves in central India by assessing the
              presence of tigers, co-predators, and prey species along different
              corridors in the landscape in collaboration with different
              stakeholders. Performed occupancy analysis on data from sign
              surveys and camera traps to identify critical and weak linkages in
              the corridor and provided recommendations to related government
              departments and other stakeholders for securing and restoring the
              functionality of corridors. Conducted a rapid assessment of forest
              divisions around one major tiger reserve for evaluating its
              potential in providing habitat and dispersal opportunities to
              tigers, co-predators, and prey species to neighboring tiger
              reserves. Addressed human-animal conflict issues in the entire
              landscape and suggested mitigation measures with local people’s
              participation. For more information, check my works on{" "}
            </p>
            <a
              href="https://www.wwfindia.org/news_facts/wwf_publications/?13721/Connecting-habitat-corridors-for-tigers-in-Panna-Landscape"
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl"
              rel="noopener noreferrer"
              target="_blank"
            >
              Panna Tiger Reserve
            </a>
            <br />
            <a
              href="https://www.wwfindia.org/news_facts/wwf_publications/?12681/Phen-Wildlife-Sanctuary"
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl"
              rel="noopener noreferrer"
              target="_blank"
            >
              Corridors
            </a>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="./study.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              class="rounded-lg bg-gray-100"
              href="https://www.wwfindia.org/news_facts/wwf_publications/?13721/Connecting-habitat-corridors-for-tigers-in-Panna-Landscape"
            ></img>
            <img
              src="./bhoram.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              class="rounded-lg bg-gray-100"
              href="https://www.wwfindia.org/news_facts/wwf_publications/?12681/Phen-Wildlife-Sanctuary"
            ></img>
            <img
              src="./land.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              class="rounded-lg bg-gray-100"
              href=""
            ></img>
            <img
              src="./tiger.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              class="rounded-lg bg-gray-100"
            ></img>
          </div>
        </div>

        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl text-gray-900">
              Pheasant ecology in an agricultural landscape of South Dakota
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="./DSC_0119.NEF.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                  Habitat loss and fragmentation are the greatest threats to
                  wildlife conservation. Grasslands are among the most
                  threatened ecosystems worldwide. The large-scale conversion of
                  North American grasslands to cultivation has been strongly
                  associated with declines in grassland bird populations.
                </p>

                <p>
                  The ring-necked pheasant is a common grassland bird that is
                  negatively impacted by the conversion of grassland to
                  cropland. Though pheasants are non-native to South Dakota,
                  they have become naturalized in most of the state. However,
                  with increases in agricultural intensification in South
                  Dakota, indices of pheasant abundance from brood route surveys
                  suggest that pheasant populations have declined to
                  historically low levels throughout the state. Over a period of
                  3 years (2017-2019), we 1) examined pheasant space use in
                  multiple seasons, and 2) quantified nest-site selection,
                  brood-site selection, and estimated nest survival. We also
                  used pheasant brood sroute survey data to 1) investigate the
                  spatial and temporal drivers of pheasant population dynamics,
                  and 2) estimate site-level abundance and the overall trend in
                  abundance and evaluate the effect of different landscape
                  characteristics on pheasant abundance.
                </p>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Keep reading to know more about different projects of this
                  whole project
                </p>
              </article>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden bg-white">
          <div class>
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div class="sm:max-w-lg">
                <h1 class="text-3xl font-bold sm:text-4xl text-gray-900">
                  HotSpot analysis of pheasant brood route survey data
                </h1>
                <div class="lg:py-16">
                  <article class="space-y-4 text-gray-600">
                    <p>
                      We used pheasants (Phasianus colchicus) across South
                      Dakota, USA as a model species to identify environmental
                      factors driving spatiotemporal variation in population
                      productivity. Using an emerging Hotspot analysis, we
                      analyzed annual count data from 105 fixed pheasant brood
                      routes over a 24-year period to identify high (HotSpot)
                      and low (ColdSpot) pheasant population productivity areas.
                      We then applied classification and regression tree
                      modeling to evaluate landscape attributes associated with
                      pheasant productivity among spatial scales (500 m and 1000
                      m). We found that the amount of grassland at a local
                      spatial scale was the primary factor influencing an area
                      being a HotSpot. Our results also demonstrated
                      non-significant or weak effects of fragmentation per se on
                      pheasant populations. These findings are in accordance
                      with the habitat amount hypothesis highlighting the
                      importance of habitat amount in the landscape for
                      maintaining and increasing the pheasant population. We,
                      therefore, recommend that managers should focus on
                      increasing the total habitat area in the landscape and
                      restoring degraded habitats. Our method of identifying
                      areas of high productivity across the landscape can be
                      applied to other species with count data.
                    </p>
                  </article>
                </div>
              </div>
              <div>
                <div class="mt-10">
                  <div
                    aria-hidden="true"
                    class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div class="h-96 w-102 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="./HS.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0274808"
                    className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    More Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl text-gray-900">
              Space use and breeding ecology of a grassland bird in an
              agricultural landscape of South Dakota
            </h2>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="./grass.jpg"
                class="absolute inset-0 h-full w-full object-cover"
                style={{ width: 500, height: 500 }}
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Keep watching to know more about published work from these
                  projects
                </p>
              </article>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="h-64 w-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="./webapp1.gif"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  Web app to upload content from field onto amazon cloud
                </h2>

                <p class="mt-4 text-gray-600">
                  Created a web application using react app and amazon web
                  services. Thsi will allow biologists/authorized users to
                  upload and edit their data. All upload will happen in amazon
                  cloud.
                </p>

                <p class="mt-4 text-gray-600">
                  We are working in collaboration with a technical team to make
                  this web app online.
                </p>

                <div class="lg:py-16">
                  <article class="space-y-4 text-gray-600">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      Keep watching! Web app coming soon!!!
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Convolutional neural network for image segmentation of remote
              sensing data
            </h2>
            <p class="mt-4 text-gray-500"></p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="./mask.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              class="rounded-lg bg-gray-100"
              href="https://www.wwfindia.org/news_facts/wwf_publications/?13721/Connecting-habitat-corridors-for-tigers-in-Panna-Landscape"
            ></img>
            <img
              src="./cnn_results.png"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              class="rounded-lg bg-gray-100"
              href="https://www.wwfindia.org/news_facts/wwf_publications/?12681/Phen-Wildlife-Sanctuary"
            ></img>
            <img
              src="./unet.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              class="rounded-lg bg-gray-100"
              href=""
            ></img>
            <img
              src="./code.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              class="rounded-lg bg-gray-100"
            ></img>
          </div>
        </div>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl text-gray-900">
              Northern bobwhite density estimate across Indiana, USA using
              hierarchical Bayesian Analysis
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-72 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="./bob1.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                  Habitat loss and fragmentation are the greatest threats to
                  wildlife conservation. Grasslands are among the most
                  threatened ecosystems worldwide. The large-scale conversion of
                  North American grasslands to cultivation has been strongly
                  associated with declines in grassland bird populations.
                </p>

                <p>
                  We are working towards estimating density of bobwhite across
                  Indiana and how the population is impacted by different
                  landscape attributes.
                </p>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Watch this space! Results to come soon!!!
                </p>
              </article>
            </div>
          </div>
        </div>

        <section class="bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
          <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center sm:text-left">
              <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                Species distribution model for northern bobwhite
              </h2>

              <p class="hidden text-gray-500 md:mt-4 md:block">
                We are using multiple data sources in a hierarchical Bayesian
                framework to estimate bobwhite distrubtion across 22 states of
                USA. We are also looking into different landscape factors
                driving their distribution across landscape.
              </p>
            </div>
          </div>

          <img
            alt="Violin"
            src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          />
        </section>
      </div>
      <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap items-center justify-between">
            <div class="w-full px-4 lg:w-6/12">
              <div class="-mx-3 flex items-center sm:-mx-4">
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="py-3 sm:py-4">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/services/image-1.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                  <div class="py-3 sm:py-4">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="relative z-10 my-4">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                    <span class="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="mt-10 lg:mt-0">
                <span class="text-primary mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p class="text-body-color mb-8 text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p class="text-body-color mb-12 text-base">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <a
                  href="javascript:void(0)"
                  class="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
