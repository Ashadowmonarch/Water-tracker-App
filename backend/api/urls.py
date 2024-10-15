from django.contrib import admin
from django.urls import path, include
from .views import WaterList, WaterCreate, delete_all_water

urlpatterns = [
    path('water/', WaterList.as_view()),
    path('waterCreate/', WaterCreate.as_view()),
    path('waterDelete/',delete_all_water)
]
