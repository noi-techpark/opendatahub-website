# Open Data Hub Website

This site is a static website which gets deployed to amazon s3 service through Jenkins.
Any modification to the master branch gets deployed directly.

## website lives in src directory

The html, css, js, ... files in src are the files of the website.

## hugo to generate the static website

To generate the static website we use hugo (https://gohugo.io/). This allows us
to define and use templates and to be faster and more flexible in the creation
of a mobile first website.

All configuration files for hugo to generate the website live inside the repo/hugo/first_site/
directory.

## How to change content of the website

You can change configuration and content files using a simple text editor and
editing the files inside repo/hugo/first_site/

```
# you have to be inside the hugo configuration directory
cd repo/hugo/first_site/

# execute the hugo command, this will generate the new website inside the 
# public subdirectory, which is a symbolic link to ../../src
hugo
```

More information about how hugo works is available in the documentation

https://gohugo.io/getting-started/usage/

## How to test the website on your local machine before publishing it?

Use the `hugo server` command to start a local webserver. Once this webserver is 
running, you can access your website on `http://localhost:1313/`

```
# you have to be inside the hugo configuration directory
cd repo/hugo/first_site/

# start the local hugo webserver
hugo server

# visit http://localhost:1313/ in your prefered web browser

```

This allows you to test all your modifications on your local machine, before
you commit and push your changes to the git repositories.

## How to publish your changes to the the website?

Once you are happy with the website and you have tested it on your local machine,
you can commit it to your local git repo and push the changes to the official repo.
This will trigger a Jenkins pipeline, which will update the website on S3.

```
# verify changes you made
git status

# add files if needed using `git add <file>`

# commit all changes
git commit -a

# push changes from your local repository to the official repo
git push
```

## How to setup your development environment?

You need to install hugo on your system and to clone the repository.

```
# install hugo
apt-get install hugo

# clone the repository
git clone https://github.com/idm-suedtirol/geobank-website
```










