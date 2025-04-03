# Frontend Observability with Honeycomb by different SPAs

This is a single project to demonstrate how to set up frontend observability with Honeycomb for different Single Page Applications (SPAs).

## SPAs supported

* Angular
* Vue
* (soon) React

## Prerequisites

* A Honeycomb account and INGEST API Key
*
## Setup

Manual, but copy `.env.sample` in the root to create a `.env` file, this is **not** checked in. Create your Honeycomb account, an evironment and an ingest key. Add the key to the .env and run `docker-compose up` to boot PostgreSQL and a collector.

Then go to the frontend of interest and run it. The frontends point to the collector, which points to Honeycomb.

## TODO

* Get the React SPA up there
* Make the node and Spring Boot server match in features and both access/modify the db
* Actually set up some real use case?
* Build everything in docker for a true production build setup
* Add more SPAs (e.g. Svelte, Ember, etc.)

## Getting Started

Currently you have to build and launch each one, and also launch the docker-compose file to start up a collector. The backends (really on) I am working on a better config, but for now wanted to put this up there to jumpstart any of my own projects that need a few SPAs and a quick backend.


