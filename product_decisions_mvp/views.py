import logging

from django.shortcuts import render, get_object_or_404

logger = logging.getLogger(__name__)

def detail(request, bike_id):

    bike = {
        "title": "Purple Vintage Road Bike",
        "height_lower": "5 ft 10",
        "height_upper": "6 ft",
        "price": 400
    }

    return render(request, 'detail.html', {'bike': bike})