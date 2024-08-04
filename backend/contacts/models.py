from django.db import models
from services.models import Service
from solutions.models import Solution

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time when the message is created
    solution = models.ForeignKey(Solution, null=True, blank=True, on_delete=models.SET_NULL, related_name='contacts')
    service = models.ForeignKey(Service, null=True, blank=True, on_delete=models.SET_NULL, related_name='contacts')

    def __str__(self):
        return f"Message from {self.name} at {self.date_sent}"

    class Meta:
        ordering = ['-date_sent']  # Orders messages with the most recent first

    def contact_about(self):
        if self.solution:
            return f"Solution: {self.solution.title}"
        elif self.service:
            return f"Service: {self.service.title}"
        return "General"
