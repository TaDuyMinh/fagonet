from django.db import models
from django.conf import settings
from django.utils import timezone

class Solution(models.Model):
    title = models.CharField(max_length=100)
    intro = models.CharField(max_length=200)
    intro_image = models.ImageField(upload_to='solutions/intro_images/', blank=True, null=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, editable=False,related_name='solution_created')
    created_date = models.DateTimeField(default=timezone.now, editable=False)
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, editable=False, related_name='solution_updated')
    updated_date = models.DateTimeField(auto_now=True)  
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title

class SolutionDetail(models.Model):
    solution = models.ForeignKey(Solution, related_name='details', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='solutions/details/', blank=True, null=True)


    def __str__(self):
        return f"{self.solution.title}: {self.title}"

class SolutionGallery(models.Model):
    solution = models.ForeignKey(Solution, related_name='gallery', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='solutions/gallery/', blank=True, null=True)

def __str__(self):
    return f"Gallery for {self.solution.title}"

