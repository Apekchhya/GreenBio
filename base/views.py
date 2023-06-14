from django.shortcuts import render
from .models import *
# Create your views here.

def home(request):
    return render(request, 'index.html')

from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse
from GreenBio.settings import EMAIL_HOST_USER


def contact_view(request):
    if request.method == 'POST':
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        sender = request.POST.get('sender')
        # recipient = EMAIL_HOST_USER

        data = {
            'subject':subject,
            'sender':sender,
            'message': message
        }
        message= '''
        New message: {}

        From: {}
        '''.format(data['message'], data['sender'])

        send_mail(data['subject'], message,'',['apekandel@gmail.com'], fail_silently=False)
        return HttpResponse('Thank you for your message.')
        
    return render(request, 'contact.html')

def blog_view(request):
    return render(request, 'blog.html')

def about_view(request):
    return render(request, 'about.html')

def about_team_view(request):
    return render(request, 'ourteam.html')