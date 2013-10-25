from django.db import models

class Bike(models.Model):

    title = models.CharField(max_length=200)

    price = models.PositiveSmallIntegerField()

    rider_height_lower_feet = models.PositiveSmallIntegerField()
    rider_height_lower_inches = models.PositiveSmallIntegerField()
    rider_height_upper_feet = models.PositiveSmallIntegerField()
    rider_height_upper_inches = models.PositiveSmallIntegerField()

    buy_url = models.URLField()

    # Implement bike pictures by inline linking to ebay.
    # Expose pubically with `img_urls`.
    _img_url_1 = models.URLField(blank=True)
    _img_url_2 = models.URLField(blank=True)
    _img_url_3 = models.URLField(blank=True)
    _img_url_4 = models.URLField(blank=True)
    _img_url_5 = models.URLField(blank=True)

    @property
    def img_urls(self):
        urls = [
            self._img_url_1,
            self._img_url_2,
            self._img_url_3,
            self._img_url_4,
            self._img_url_5,
        ]
        urls = filter(lambda url: url != "", urls)
        return urls

    @property
    def primary_img_url(self):
        if len(img_urls) > 0:
            return img_urls[0]
        else:
            return ""

    def __unicode__(self):
            return self.title