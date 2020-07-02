"""goatbase URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path
from notes.views import note_list, note_detail
from posts.views import post_list, post_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/notes/', note_list),
    path('api/notes/<int:pk>/', note_detail),
    path('api/posts/', post_list),
    path('api/posts/<int:pk>/', post_detail),
]