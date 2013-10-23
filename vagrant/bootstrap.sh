#!/usr/bin/env bash

# Install core Python development environment, from there on
# can use pip and virtual environments.
apt-get update
apt-get install -y python-pip vim libpq-dev python-dev
pip install virtualenv

# Install Heroku.
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh