import math

from django.db import models

class Bike(models.Model):

    def __unicode__(self):
            return self.title

    notes = models.TextField(blank=True)

    title = models.CharField(max_length=200)

    price = models.PositiveSmallIntegerField()

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
        if len(self.img_urls) > 0:
            return self.img_urls[0]
        else:
            return ""

    # Basing frame sizing on http://www.cambridgeclassicbikes.co.uk/sizing.php
    #
    # Distinguish between three types of frame with different sizing calculation:
    # - Town/Dutch Bikes
    # - Racing/Touring Bikes
    # - Mountain Bikes

    TOWN_DUTCH = "td"
    RACING_TOURING = "rt"
    MOUNTAIN = "m"

    FRAME_TYPE_CHOICES = (
        [TOWN_DUTCH, "Town/Dutch"],
        [RACING_TOURING, "Racing/Touring"],
        [MOUNTAIN, "Mountain"]
    )

    frame_type = models.CharField(max_length=2, choices=FRAME_TYPE_CHOICES)
    frame_size_cm = models.PositiveSmallIntegerField()

    @staticmethod
    def _cm_to_inches(cm):
        INCHES_PER_CM = 0.39370
        return cm*INCHES_PER_CM

    @staticmethod
    def _town_dutch_frame_size_to_ideal_rider_height(frame_size_inches):
        return 2*frame_size_inches + 26.5

    @classmethod
    def _town_dutch_frame_size_to_lower_rider_height(cls, frame_size_inches):
        return cls._town_dutch_frame_size_to_lower_rider_height(frame_size_inches)-2.5

    @classmethod
    def _town_dutch_frame_size_to_upper_rider_height(cls, frame_size_inches):
        return cls._town_dutch_frame_size_to_lower_rider_height(frame_size_inches)+2.5

    @staticmethod
    def _racing_touring_frame_size_to_ideal_rider_height(frame_size_inches):
        return 2*frame_size_inches + 24.5

    @classmethod
    def _racing_touring_frame_size_to_lower_rider_height(cls, frame_size_inches):
        return cls._racing_touring_frame_size_to_ideal_rider_height(frame_size_inches)-3.5

    @classmethod
    def _racing_touring_frame_size_to_upper_rider_height(cls, frame_size_inches):
        return cls._racing_touring_frame_size_to_ideal_rider_height(frame_size_inches)+3.5

    _mountain_frame_size_to_ideal_rider_height = _town_dutch_frame_size_to_ideal_rider_height
    _mountain_frame_size_to_lower_rider_height = _town_dutch_frame_size_to_lower_rider_height
    _mountain_frame_size_to_upper_rider_height = _town_dutch_frame_size_to_upper_rider_height

    @property
    def rider_height_lower_total_inches(self):
        """Lower bound on the height of a rider that would fit this bike."""
        frame_size_to_lower_rider_height = {
            self.TOWN_DUTCH: self._town_dutch_frame_size_to_lower_rider_height,
            self.RACING_TOURING: self._racing_touring_frame_size_to_lower_rider_height,
            self.MOUNTAIN: self._mountain_frame_size_to_lower_rider_height,
        }[self.frame_type]
        return frame_size_to_lower_rider_height(self._cm_to_inches(self.frame_size_cm))

    @property
    def rider_height_upper_total_inches(self):
        """Upper bound on the height of a rider that would fit this bike."""
        frame_size_to_upper_rider_height = {
            self.TOWN_DUTCH: self._town_dutch_frame_size_to_upper_rider_height,
            self.RACING_TOURING: self._racing_touring_frame_size_to_upper_rider_height,
            self.MOUNTAIN: self._mountain_frame_size_to_upper_rider_height,
        }[self.frame_type]
        return frame_size_to_upper_rider_height(self._cm_to_inches(self.frame_size_cm))

    @staticmethod
    def _total_inches_to_feet(inches):
        INCHES_PER_FEET = 12
        return int(math.floor(inches // INCHES_PER_FEET))

    @staticmethod
    def _total_inches_to_inches(inches):
        INCHES_PER_FEET = 12
        return int(math.floor(inches % INCHES_PER_FEET))

    rider_height_lower_feet = property(lambda self: self._total_inches_to_feet(self.rider_height_lower_total_inches))
    rider_height_lower_inches = property(lambda self: self._total_inches_to_inches(self.rider_height_lower_total_inches))
    rider_height_upper_feet = property(lambda self: self._total_inches_to_feet(self.rider_height_upper_total_inches))
    rider_height_upper_inches = property(lambda self: self._total_inches_to_inches(self.rider_height_upper_total_inches))

    male = models.BooleanField()
    female = models.BooleanField()