from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('contact', views.contact_view, name = 'contact'),
    path('blog', views.blog_view, name = 'blog'),
    path('about', views.about_view, name = 'about'),
    path('about/ourteam', views.about_team_view, name = 'about_team'),
]