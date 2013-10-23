from django.db import models

class Bike(models.Model):

    title = models.CharField(max_length=200)

    price = models.PositiveSmallIntegerField()

    rider_height_lower_feet = models.PositiveSmallIntegerField()
    rider_height_lower_inches = models.PositiveSmallIntegerField()
    rider_height_upper_feet = models.PositiveSmallIntegerField()
    rider_height_upper_inches = models.PositiveSmallIntegerField()

    buy_url = models.URLField()

    def __unicode__(self):
            return self.title