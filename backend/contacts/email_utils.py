# contacts/email_utils.py

from django.core.mail import send_mail
from django.conf import settings

def send_contact_notification(contact_instance):
    subject = 'Lumisec - New Contact Received'
    message = (
        f"A new contact has been sent by customer !.\n\n"
        f"Name: {contact_instance.name}\n"
        f"Email: {contact_instance.email}\n"
        f"Message: {contact_instance.message}\n"
        f"Date Sent: {contact_instance.date_sent}\n"
        f"Solution: {contact_instance.solution or 'None'}\n"  # Handle None case
        f"Service: {contact_instance.service or 'None'}\n"  # Handle None case
    )
    from_email = "lumisecwebsite@gmail.com"
    recipient_list = ["lumisecwebsite@gmail.com"]

    send_mail(
        subject,
        message,
        from_email,
        recipient_list,
        fail_silently=False,
    )
