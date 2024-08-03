# views.py
from rest_framework import viewsets,generics
from .models import Service
from .serializers import ServiceSerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)  # Filter based on your requirements
    serializer_class = ServiceSerializer
