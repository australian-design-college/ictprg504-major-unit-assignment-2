# ICTPRG504 Major Unit Assignment

A database and server (helper files for the ICTPRG504 Major Unit Assignment)

## Setting up the environment variables

Simply copy `.env.example` into `.env`. You can do this in multiple ways, although the easiest is simply doing so through Atom.

## Setting up the database using a Docker container

You must have Docker installed for the following to work. You can get Docker if you're on Mac at [https://docker.com](https://docker.com). You can also get Docker if you're on Windows, but only on certain versions. Find out more at [https://docker.com](https://docker.com).

Run the following to get it working with the default `.env.example` file:

    docker run \
      -p 0.0.0.0:8082:3306 \
      --name ictprg504-db \
      -e MYSQL_ROOT_PASSWORD=password \
      -e MYSQL_DATABASE=ictprg504 \
      -d mysql:5.7.20

## Importing the database

You can find the SQL dump of the database inside of `Import Me.sql`.
