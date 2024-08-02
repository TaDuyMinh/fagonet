# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SolutionViewSet,SolutionGalleryViewSet

router = DefaultRouter()
router.register(r'solutions', SolutionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  
    path('api/solutions/<int:solution_id>/gallery/', SolutionGalleryViewSet.as_view({'get': 'list'}), name='solution-gallery'),
] 