from django.db import models
from django.conf import settings
from django.utils import timezone

class Service(models.Model):
    title = models.CharField(max_length=200)
    intro = models.TextField()
    firstword = models.TextField()
    description = models.TextField()
    intro_image = models.ImageField(upload_to='services/intro_images/', null=True, blank=True)
    detail_image = models.ImageField(upload_to='services/detail_images/', null=True, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, editable=False,related_name='service_created')
    created_date = models.DateTimeField(default=timezone.now, editable=False)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, editable=False, related_name='service_updated')
    updated_date = models.DateTimeField(auto_now=True)  
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title

class ServiceDeploymentStep(models.Model):
    service = models.ForeignKey(Service, related_name='service_deployment_steps', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='services/step_images', blank=True, null=True)

    class Meta:
        ordering = ['id']  # Order by id or any other field if needed

    def __str__(self):
        return f"{self.title} for {self.service.title}"

class ServiceCompetitiveAdvantage(models.Model):
    service = models.ForeignKey(Service, related_name='competitive_advantages_list', on_delete=models.CASCADE)
    content = models.TextField()
