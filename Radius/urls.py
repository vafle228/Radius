from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('main/', include('MainPage.urls')),
    path('sections/', include('SectionPage.urls')),
]
