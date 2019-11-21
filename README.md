# Welcome to the UA5 Python Devops Test

## Overview 

This readme is purposefully lacking in setup instructions.

We want to make sure you can work within the gcloud environment and figure out how to set up a project without clear instructions.

Why? Sometimes this role will involve jumping into a project with terribly outdated instructions


### Here’s the goal

* Get it running locally with gcloud (https://cloud.google.com/appengine/docs/standard/python/download) to be used on App Engine
* You'll need to run the app engine local development server for testing
* Fix the issue:
  * The frontend currently hits a python endpoint, but the server is returning an error
  * The site title "I passed the test." from the backend isn't appearing on the homepage
* Deploy it to a *.appspot.com URL e.g. https://samantha-ua5-bugfix.appspot.com
  * You'll need to create your own app engine project for this
* Send us back a diff of your code and a link to it staged

The task took Samantha, a savvy gcloud user, 30 minutes to complete.

### What this test isn't:
* Not a programming/refactor/architecture challenge — the fix is literally two lines of code
* We're not looking for cool technologies used here, (e.g. no docker/kubernetes)

## Getting Started

Todo: document setup instructions - if you get lost check out the app engine docs

Simply run the build command for the frontend

For the python dependencies, be sure to install them in a directory called `lib`