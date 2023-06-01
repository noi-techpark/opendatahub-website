<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

# Open Data Hub Website

Repository for the [Open Data Hub](https://opendatahub.com/) website created with [Hugo](https://gohugo.io/).

[![CI/CD](https://github.com/noi-techpark/opendatahub-website/actions/workflows/main.yml/badge.svg)](https://github.com/noi-techpark/opendatahub-website/actions/workflows/main.yml)

## Table of contents

- [Gettings started](#getting-started)
- [Deployment](#deployment)
- [New event]()
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

### Add a new event

This section explains how to create a new event in the Open Data Hub website.

#### Simple Event that links outside

To add an event box in the Event section of the website you have to add an .md file in the /src/content/events folder.
The .md file should contain the following information:
title: "Title of the event"
img: "/img/events/eventImage.jpg"
img_alt: "event"
day: "yyyy-mm-dd"
time: "hh:mm"
location: "Location name"
button_link: "link to the event website"
button_label: "label of the button"

Moreover the .md file should contain also a short description of the event.

#### Complex event with Programm page

To add a new event page that includes more info you have to do the following steps:
- create a folder with the name of the event in the folder /src/content/ (for the content of the folder you can use the odhday and odhday22 as example and change it accordingly to your needs)
- in the .md file in the folder /src/content/eventname/ put the name of the folder in the "position file"
- create a folder with the name of the event in the folder /src/themes/odh-fbe/layouts (for the content of the folder yuo can use the odhday and odhday22 as example and change it accordingly to your needs)
- in the list.html file in the folder /src/themes/odh-fbe/layouts/eventname/ put the folder name in the following lines

```
<section class="bg-darker">

	{{ partial "title-section.html" site.Data.foldername.program }}
	{{ partial "table-program" site.Data.foldername.content }}
	
</section>
```

- create a file .yml in the folder /src/data. Please note that the file should be named like the two folder you have created in the previous points (for the content of the folder yuo can use the odhday and odhday22 as example and change it accordingly to your needs).
**Note**: Don't use capital letters in the naming of files and folders.

## Deployment

To deploy the website, simply run the command `hugo -s src -d ../target` from the root folder of the project. The final version of the website will then be generated inside the `target` folder.

## Docker environment

For the project, a Docker environment is already prepared and ready to use with all the necessary prerequisites.

These Docker containers are the same as used by the continuous integration servers.

### Installation

Install [Docker](https://docs.docker.com/install/) (with Docker Compose) locally on your machine.

### Start and stop the containers

Before you start working, start the Docker containers:

```
docker-compose up --build --detach
```

The website will be available at [http://127.0.0.1:1313](http://127.0.0.1:1313). It also recompiles automatically if you make any changes to the source code.

After finishing work, you can stop the Docker containers:

```
docker-compose stop
```

## Information

### Support

For support, please contact [info@opendatahub.com](mailto:info@opendatahub.com).

### Contributing

If you'd like to contribute, please follow the following instructions:

- Fork the repository.

- Checkout a topic branch from the `master` branch.

- Make sure the tests are passing.

- Create a pull request against the `master` branch.

### Documentation

More documentation can be found at [https://opendatahub.readthedocs.io/en/latest/index.html](https://opendatahub.readthedocs.io/en/latest/index.html).

### Boilerplate

The project uses this boilerplate: [https://github.com/noi-techpark/hugo-boilerplate](https://github.com/noi-techpark/hugo-boilerplate).

### License

The code in this project is licensed under the Mozilla Public License 2.0 license.
See the LICENSE.md file for more information.
