# views.py
from rest_framework import viewsets
from .models import Solution
from .serializers import SolutionSerializer

class SolutionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Solution.objects.filter(is_active=True)  # Filter based on your requirements
    serializer_class = SolutionSerializer

