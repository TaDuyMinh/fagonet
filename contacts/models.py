from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time when the message is created

    def __str__(self):
        return f"Message from {self.name} at {self.date_sent}"

    class Meta:
        ordering = ['-date_sent']  # Orders messages with the most recent first