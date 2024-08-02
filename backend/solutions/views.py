# views.py
from rest_framework import viewsets
from .models import Solution,SolutionGallery
from .serializers import SolutionSerializer,SolutionGallerySerializer

class SolutionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Solution.objects.filter(is_active=True)  # Filter based on your requirements
    serializer_class = SolutionSerializer

class SolutionGalleryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = SolutionGallerySerializer

    def get_queryset(self):
        solution_id = self.kwargs.get('solution_id')
        return SolutionGallery.objects.filter(solution_id=solution_id)