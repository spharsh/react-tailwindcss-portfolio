import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section class="bg-white" id="skills">
      <div class="mx-auto sm:px-6 md:py-16 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Skills</h2>

          <p class="mt-2 text-gray-500 sm:text-xl">
            A brief description of skills and softwares that I work with.
          </p>
        </div>
      </div>

      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skill Set
          </h2>
          <p class="mt-4 text-gray-500"></p>

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
                Uni- and multivariate modeling in both frequentist and Bayesian
                frameworks
              </dd>
              <dd class="mt-2 text-sm text-gray-500">
                Density, occupancy, species distribution, distance sampling
                (frequentist and Bayesian)
              </dd>
              <dd class="mt-2 text-sm text-gray-500">
                Regression analysis-GLM, GLMM, resource selection, survival
                analysis, abundance and occupancy estimate using N-mixture
                models
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
                Developing web application using react-app (javaScript
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
            src="./soft.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            class="rounded-lg bg-gray-100"
          ></img>
          <img
            src="./analysis.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            class="rounded-lg bg-gray-100"
          ></img>
          <img
            src="./eco.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            class="rounded-lg bg-gray-100"
          ></img>
          <img
            src="./gis.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            class="rounded-lg bg-gray-100"
          ></img>
        </div>
      </div>
    </section>
  );
}
