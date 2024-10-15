from django.contrib import admin
from django.urls import path, include
from .views import WaterList, WaterCreate

urlpatterns = [
    path('water/', WaterList.as_view()),
    path('waterCreate/', WaterCreate.as_view())
]
