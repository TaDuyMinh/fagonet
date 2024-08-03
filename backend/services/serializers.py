from rest_framework import serializers
from .models import Service, ServiceDeploymentStep, ServiceCompetitiveAdvantage

class ServiceDeploymentStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceDeploymentStep
        fields = ['id', 'service', 'title', 'content', 'image']

class ServiceCompetitiveAdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCompetitiveAdvantage
        fields = ['id', 'service', 'content']

class ServiceSerializer(serializers.ModelSerializer):
    service_deployment_steps = ServiceDeploymentStepSerializer(many=True, read_only=True)
    competitive_advantages_list = ServiceCompetitiveAdvantageSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = [
            'id', 'title', 'intro', 'firstword', 'description', 'intro_image', 
            'detail_image', 'created_by', 'created_date', 'updated_by', 
            'updated_date', 'is_active', 'service_deployment_steps', 
            'competitive_advantages_list'
        ]
