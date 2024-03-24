from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

api_prefix = 'api/'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(api_prefix+'api-auth/', include('rest_framework.urls')),
    path('', include('social_api.urls')),
]
