from django.db import models
from django.conf import settings
from django.utils import timezone
# Create your models here.

class Blog(models.Model):
    topic = models.CharField(max_length=200)
    content = models.TextField()
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, editable=False,related_name='blog_created')
    created_date = models.DateTimeField(default=timezone.now, editable=False)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, editable=False,related_name='blog_updated')
    updated_date = models.DateTimeField(auto_now=True)  
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.topic