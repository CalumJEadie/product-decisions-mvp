from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

import views

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'product_decisions_mvp.views.home', name='home'),
    # url(r'^product_decisions_mvp/', include('product_decisions_mvp.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    url(r'^$', TemplateView.as_view(template_name="home.html")),

    url(r'^about/$', TemplateView.as_view(template_name="about.html")),

    # e.g. /bikes/1/
    url(r'^bikes/(?P<bike_id>\d+)/$', views.detail, name='detail'),
)
