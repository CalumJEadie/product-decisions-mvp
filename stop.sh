#!/bin/bash

# One click development stop script, based on
# http://ngauthier.com/2012/08/one-click-development.html

# Ensure we're in the project directory.
cd `dirname $0`

# Shutdown the VM, makes it easier to be sure about
# what services are running, simplifying start.sh.
vagrant halt