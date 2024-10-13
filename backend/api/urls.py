from django.contrib import admin
from django.urls import path, include
from .views import WaterList

urlpatterns = [
    path('water/', WaterList.as_view()),
]
