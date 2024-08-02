from rest_framework import serializers
from .models import Solution, SolutionDetail, SolutionGallery

class SolutionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolutionDetail
        fields = ['title', 'content', 'image']

class SolutionGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = SolutionGallery
        fields = ['image']

class SolutionSerializer(serializers.ModelSerializer):
    details = SolutionDetailSerializer(many=True, read_only=True)
    gallery = SolutionGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Solution
        fields = '__all__' 
