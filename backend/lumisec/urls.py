from django.contrib import admin
from django.urls import path,include
from django_otp.admin import OTPAdminSite
from django.conf import settings
from django.conf.urls.static import static

admin.site.__class__ = OTPAdminSite

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contacts.urls')),
    path('', include('solutions.urls')),
    path('', include('services.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)