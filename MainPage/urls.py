from django.urls import path
from .views import *

urlpatterns = [
    path('', main_page),
    path('update', update_average),
    path('create_section/', create_section, name='create_section')
]
