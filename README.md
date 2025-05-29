<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

# Open Data Hub Website

Repository for the [Open Data Hub](https://opendatahub.com/) website created with [Hugo](https://gohugo.io/).

[![REUSE Compliance](https://github.com/noi-techpark/opendatahub-website/actions/workflows/reuse.yml/badge.svg)](https://github.com/noi-techpark/odh-docs/wiki/REUSE#badges)
[![CI/CD](https://github.com/noi-techpark/opendatahub-website/actions/workflows/main.yml/badge.svg)](https://github.com/noi-techpark/opendatahub-website/actions/workflows/main.yml)

## Table of contents

- [Gettings started](#getting-started)
- [Deployment](#deployment)
- [Add content](#add-content)
  - [Use Cases](#use-cases)
  - [Events](#events)
    - [Simple events](#simple-events-that-link-outside)
    - [Complex events](#complex-events-with-programm-page)
  - [Videos](#videos)
    - [Video sections](#add-new-sections)
    - [Individual videos](#add-new-videos)
- [Add Web Components](#add-web-components)
- [Docker environment](#docker-environment)
- [Information](#information)

## Getting started

These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

To build the project, the following prerequisites must be met:

- [Hugo](https://gohugo.io/)

If you don't want to install all prerequisites directly on your machine and instead use a Docker environment with all prerequisites already installed and configured, you can check out the [Docker environment](#docker-environment) section.

### Source code

Get a copy of the repository:

```bash
git clone git@github.com:noi-techpark/opendatahub-website.git
```

Change directory:

```bash
cd opendatahub-website
```

### Development

To start a local webserver that serves the project, simply run the following command:

```bash
hugo server -s src
```

The website will be available at [http://127.0.0.1:1313](http://127.0.0.1:1313). It also recompiles automatically if you make any change to the source code.

## Docker environment

For the project, a Docker environment is already prepared and ready to use with all the necessary prerequisites.

These Docker containers are the same as used by the continuous integration servers.

### Installation

Install [Docker](https://docs.docker.com/install/) (with Docker Compose) locally on your machine.

### Start and stop the containers

Before you start working, start the Docker containers:

```bash
docker-compose up --build --detach
```

The website will be available at [http://127.0.0.1:1313](http://127.0.0.1:1313). It also recompiles automatically if you make any changes to the source code.

After finishing work, you can stop the Docker containers:

```bash
docker-compose stop
```

## Deployment

To deploy the website, simply run the command `hugo -s src -d ../target` from the root folder of the project. The final version of the website will then be generated inside the `target` folder.

## Add content

**NOTE:** To add new content for the page like new use cases, events or videos **it is not necessary** to edit anything other than the `src/content` and the `src/data` directories. Even new routes like `opendatahub.com/events/some-new-event` are generated automatically when adding to the content directory.

### **Use cases:**

To create a new use case listed under /use-cases create a new .md file in the the `/src/content/use-cases` folder.
The file needs the following information in its yaml header:

```yml
---
position: "Use Cases" # Should always be "Use Cases"
use_case_tags: # The categories this use case belongs to (for filtering)
  - "mobility"
  - "traffic"

short: # Information for the list entry under /use-cases
  bg_darker: false # If the background for this list entry should be darker
  weight: 2 # Position of the entry in the list (higher number -> higher on list)
  partial: text-imgs-icon.html # The partial this entry will be rendered with
  # Here the necessary fields for the partial like:
  # title:
  # subtitle:
  # ...

start: # The title of the individual use-case page
  partial: title-cta.html # The partial this entry will be rendered with
  # Here the necessary fields for the partial like:
  # title:
  # subtitle:
  # ...

paragraphs: # The paragraphs of the individual use-case page
  # The first paragraph
  - partial: imgs-text.html # The partial this entry will be rendered with
    # Here the necessary fields for the partial like:
    # description:
    # img_back:

    # The second paragraph
  - partial: imgs-icon-text.html # The partial this entry will be rendered with
    # Here the necessary fields for the partial like:
    # description:
    # img_front:
    # img_back:
---
```

### **Events:**

#### **Simple Events that link outside:**

To add an event box in the Event section of the website you have to add an entry to the `boxes` array in the [events.yml](src/data/events.yml) file.
The entry contain the following information:

```yml
---
title: Title of the event
subtitle: The description of the event
img: /img/events/eventImage.jpg
day: "yyyy-mm-dd"
time: "hh:mm"
location: "Location name"
btn_link: link to the event website
btn_label: label of the button
---
Short description of the event with markdown syntax
```

#### **Complex events with Programm page:**

To add a new event page that includes more info you have to do the following steps:

- Create the event box as explained in [Simple Events that link outside](#simple-events-that-link-outside)
- Create a folder with the name of the event in the folder `/src/content/events` (you can use existing event pages such as odhday23 or mentorfinalevent as reference)
- Create a `_index.md` file within the folder
- Fill the yaml header of the `_index.md` file with the necessary information for the event:

```yml
---
type: events/single # This has to be "events/single"
content_partial: table-program-press-release # The partial which the table will be rendered with
position: "Events" # This always has to be "Events"
aliases: # Optional aliases for the url, following are examples for redirects to "/events/odhday23"
  - "/events/odhday"
  - "/odhday"
  - "/odhday23"

title: "Title" # Title of the event
subtitle: "Subtitle" # Subtitle of the event

program:
  title: "Title" # Title of the table
  subtitle: "Subtitle" # Subtitle of the table

content: # Data for the table (look at existing events for refrence)
---
```

### **Videos:**

The video library is structured as an array with each entry being one of the sections like "Open Data Hub Interviews" or "Open Data Hub Day 2023", each section entry holds another array with the individual videos for that section.

#### **Add new sections:**

In the [videos.yml](src/data/videos.yml) file:

```yml
sections:
  # The following is your new section
  - title: "**Section title**"
    initially_expanded: false # Control if the section is initially expanded or collapsed
    videos: # List of the section videos
```

#### **Add new videos:**

In the [videos.yml](src/data/videos.yml) file:

```yml
sections:
  # Find the section you want to add the video to
  - title: "**Section title**"
    initially_expanded: false
    videos: # List of the section videos
      # The following is your new video entry
      - subtitle: "Institution or company name"
        title: "**Video title**"
        description: "Video participant names"
        btn_link: "Link to video script or slides"
        btn_label: Label for button to video script or slides
        video: "Embedded video link"
        target_blank: true # Whether or not the link to the video script or slides is external or not (almost always true)
```

## Add Web Components

Adding Web Components **from the Web Component store** to the layout of a page is simple.

1. Add the Web Component data to the project configuration under `/src/config`. The `_default/config.yml` file contians general information about the project. It is used during local development. Locate the `web_components` array and add your Web Component:

```yml
web_components:
  # This is the new Web Component
  example_web_component:
    tag_name: example-web-component # Name of the html tag
    uuid: 8c81bdea-17d9-4b0a-8d0b-7c760c53169e # uuid generated by the Web Component store
    script_name: example-web-component.min.js # Name of the script provided by the Web Component store
    attributes: # The attributes passed to the Web Component, add them as key value pairs to this array.
      - key: example-attribute
        value: "example attribute value"
      - key: boolean-attribute # Add only the key for boolean attributes
```

2. Now add the same information to `/src/config/testing/params.yml`. Fields specified in this file overwrite fields of the same name of the `params` object in `_default.yml` on testingmachine deploys.

3. Now add information for the **production version** of the Web Component to `/src/config/production/params.yml`. Fields specified in this file overwrite fields of the same name of the `params` object in `_default.yml` on production deploys. **NOTE: the uuid for a Web Component on the store is different for testingmachine and production deploys.**

4. Locate the html file you want to place your Web Component in and call the web-component.html partial:

```html
{{ partial "web-component.html" site.Params.web_components.example_web_component
}}
```

5. If you want automatic spacing around the Web Component:

```html
<section>
  <div class="container">
    {{ partial "web-component.html"
    site.Params.web_components.example_web_component }}
  </div>
</section>
```

On local development and on testingmachine deploys this Web Component would render like so:

```html
<section>
  <div class="container">
    <example-web-component
      example-attribute="example attribute value"
      boolean-attribute
    ></example-web-component>
    <script src="https://webcomponents.opendatahub.testingmachine.eu/dist/8c81bdea-17d9-4b0a-8d0b-7c760c53169e/example-web-component.min.js"></script>
  </div>
</section>
```

On production deploys the url will point to the production script of the Web Component.

## Information

### Support

For support, please contact [help@opendatahub.com](mailto:help@opendatahub.com).

### Contributing

If you'd like to contribute, please follow the following instructions:

- Fork the repository.

- Checkout a topic branch from the `main` branch.

- Make sure the tests are passing.

- Create a pull request against the `main` branch.

### Documentation

More documentation can be found at [https://opendatahub.readthedocs.io/en/latest/index.html](https://opendatahub.readthedocs.io/en/latest/index.html).

### Boilerplate

The project uses this boilerplate: [https://github.com/noi-techpark/hugo-boilerplate](https://github.com/noi-techpark/hugo-boilerplate).

### License

The code in this project is licensed under the Mozilla Public License 2.0 license.
See the LICENSE.md file for more information.

### REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:

```bash
pip install pre-commit
```

Then install the pre-commit hook via the config file by running:

```bash
pre-commit install
```
