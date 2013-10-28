#!/bin/bash

source venv/bin/activate

pip install -r requirements.txt

# Revert to SQLite for the moment.
# export DATABASE_URL='postgres://postgres:password@127.0.0.1:5432/product_decisions_mvp'
export DATABASE_URL='sqlite:////tmp/db.sqlite'
python manage.py syncdb

export PORT=8000
foreman start