from django.shortcuts import render
from rest_framework import generics
from .models import Water
from .serializers import WaterSerializer
# Create your views here.

class WaterList(generics.ListAPIView):
    queryset = Water.objects.all()
    serializer_class = WaterSerializer