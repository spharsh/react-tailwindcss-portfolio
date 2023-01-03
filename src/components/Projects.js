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
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
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
              participation.
              <br />
              For more information, check my works on{" "}
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
        <section class="bg-white">
          <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                Web app to upload content from field onto amazon cloud
              </h2>
            </div>
            <p class="mt-4 text-gray-600">
              Created a web application using react app and amazon web services.
              Thsi will allow biologists/authorized users to upload and edit
              their data. All upload will happen in amazon cloud. We are working
              in collaboration with a technical team to make this web app
              online.
            </p>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Keep watching! Web app coming soon!!!
            </p>
          </div>
        </section>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-1">
            <div class="relative z-10 lg:py-16">
              <div class="h-64 w-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="./gif1.gif"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Convolutional neural network for image segmentation of remote
              sensing data
            </h2>
            <p class="mt-4 text-gray-500">
              Our goal is to understand how different land-cover types impact
              northern bobwhite population in USA. To achieve this goal, we are
              performing different population modeling like species
              distribution, density estimates etc. For assessing impact of
              land-cover types through these models, we are using convolutional
              neural network (CNN). CNN is a type of neural network based on
              convolutional layers. A convolution layer is a set of filters
              (weight matrices) which are used for convolution operation on a
              feature matrix such as an image. Using CNN, we are conducting
              image segmentation on remote sensing data like Landsat data.
            </p>

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
                  Habitat loss and fragmentation are a growing threat to
                  wildlife worldwide and we need a better understanding of these
                  landscape processes to reverse their impact on species’
                  populations. Grassland biomes are among the most imperiled
                  ecosystems in the world and grassland birds are experiencing
                  significant population declines in North America.
                  Understanding how species respond to landscape factors across
                  spatiotemporal extents is critical to determining animals’
                  distribution.
                </p>

                <p>
                  We are working towards estimating density of bobwhite across
                  Indiana and how the population is impacted by different
                  landscape attributes.
                </p>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Watch this space!
                </p>
              </article>
            </div>
          </div>
        </div>
        <section>
          <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class>
                <div class="mx-auto max-w-xl text-center">
                  <div class="max-w-3xl">
                    <h2 class="text-3xl font-bold sm:text-4xl text-gray-900">
                      Species distribution model for northern bobwhite
                    </h2>
                  </div>

                  <p class="hidden text-white/90 sm:mt-4 sm:block">
                    We are using multiple data sources in a hierarchical
                    Bayesian framework to estimate bobwhite distrubtion across
                    22 states of USA. We are also looking into different
                    landscape factors driving their distribution across
                    landscape.
                  </p>
                </div>
              </div>

              <div class>
                <img
                  alt="Student"
                  src="./model1.png"
                  class="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
