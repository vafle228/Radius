from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('redirect', section_redirect, name='redirect'),
    re_path(r'^update/(?P<identifier>[\w.@+-]+)', update_data),
    re_path(r'^(?P<identifier>[\w.@+-]+)', section_page),
]
