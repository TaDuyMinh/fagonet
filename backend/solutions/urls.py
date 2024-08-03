# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SolutionViewSet,SolutionGalleryViewSet

router = DefaultRouter()
router.register(r'solutions', SolutionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  
] 