from django.db import models
from services.models import Service
from solutions.models import Solution

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time when the message is created

    def __str__(self):
        return f"Message from {self.name} at {self.date_sent}"

    class Meta:
        ordering = ['-date_sent']  # Orders messages with the most recent first

class SolutionContact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time when the message is created
    solution = models.ForeignKey(Solution, on_delete=models.CASCADE)

    def __str__(self):
        return f"Message from {self.name} at {self.date_sent} about {self.solution}"

    class Meta:
        ordering = ['-date_sent']  # Orders messages with the most recent first

class ServiceContact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time when the message is created
    service = models.ForeignKey(Service, on_delete=models.CASCADE)

    def __str__(self):
        return f"Message from {self.name} at {self.date_sent} about {self.service}"

    class Meta:
        ordering = ['-date_sent']  # Orders messages with the most recent first
