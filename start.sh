#!/bin/bash

# One click development start script, based on
# http://ngauthier.com/2012/08/one-click-development.html

# Ensure we're in the project directory.
cd `dirname $0`

# Create, boot, provision VM.
vagrant up

# On the vagrant box, get environment running.
vagrant ssh -c "cd /vagrant && ./vagrant/start.sh"