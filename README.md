product-decisions-mvp
=====================

http://product-decisions-mvp.herokuapp.com/

http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850

Local Development
-----------------

### Setup

Clone the repository.

```sh
git clone git@github.com:CalumJEadie/product-decisions-mvp.git
cd product-decisions-mvp
```

Boot up a local Virtual Machine using Vagrant.

```sh
vagrant up
```

SSH into machine and install.

```sh
# On host machine.
vagrant ssh
# On guest machine.
cd /vagrant
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Usage

```sh
# On host machine.
vagrant up
vagrant ssh
# On guest machine.
cd /vagrant
source venv/bin/activate
export DATABASE_URL='sqlite:////tmp/db.sqlite'
python manage.py runserver 0.0.0.0:8000
```

View at http://127.0.0.1:8000.