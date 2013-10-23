import logging

from django.shortcuts import render, get_object_or_404

from models import Bike

logger = logging.getLogger(__name__)

def detail(request, bike_id):

    bike = get_object_or_404(Bike, pk=bike_id)

    return render(request, 'detail.html', {'bike': bike})