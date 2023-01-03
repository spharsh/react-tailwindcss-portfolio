import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <section class="bg-white">
        <div class>
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Skills</h2>
          </div>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Skill Sets
            </h2>
            <p class="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">R programming</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Programming in R and associated packages
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">
                  Ecological Modeling, Population Modeling
                </dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Uni- and multivariate modeling in both frequentist and
                  Bayesian frameworks
                </dd>
                <dd class="mt-2 text-sm text-gray-500">
                  Density, occupancy, species distribution, distance sampling
                  (frequentist and Bayesian)
                </dd>
                <dd class="mt-2 text-sm text-gray-500">
                  Regression analysis-GLM, GLMM, resource selection, survival
                  analysis, abundance estimate using N-mixture models
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">GIS</dt>
                <dd class="mt-2 text-sm text-gray-500">ArcGIS Pro, ArcMap</dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Python Programming</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Basic programming in python, Convolutional Neural Network
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Web Application</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Developing web application using react-app (javascript
                  framework) and amazon web services
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">
                  Ecological Software/Tool
                </dt>
                <dd class="mt-2 text-sm text-gray-500">
                  MARK, PRESENCE, FRAGSTAT, MaxEnt, Google Earth Engine
                </dd>
              </div>
            </dl>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              class="rounded-lg bg-gray-100"
            ></img>
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              class="rounded-lg bg-gray-100"
            ></img>
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              class="rounded-lg bg-gray-100"
            ></img>
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              class="rounded-lg bg-gray-100"
            ></img>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Taminoturoko Briggs, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              {" "}
              A software developer with experience in building Responsive and
              Scalable Web apps. I am well-knowledged in UI/UX principles and
              practices. In addition to software development, I am also a
              technical writer--simplifying topics/concepts on the web.
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Taminoturoko Briggs, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              {" "}
              A software developer with experience in building Responsive and
              Scalable Web apps. I am well-knowledged in UI/UX principles and
              practices. In addition to software development, I am also a
              technical writer--simplifying topics/concepts on the web.
            </p>
          </div>
        </div>
      </section>
      <div class="bg-white">
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div class="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Watches
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" class="block group">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="object-cover w-full rounded aspect-square"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="block group">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="object-cover w-full rounded aspect-square"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            In my professional experience, over a couple of years, I have
            gathered few skill sets.
          </p>
        </div>
      </div>
    </section>
  );
}
