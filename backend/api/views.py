from django.shortcuts import render
from rest_framework import generics
from .models import Water
from .serializers import WaterSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class WaterList(generics.ListAPIView):
    queryset = Water.objects.all()
    serializer_class = WaterSerializer

class WaterCreate(generics.CreateAPIView):
    queryset = Water.objects.all()
    serializer_class = WaterSerializer

@api_view(['DELETE'])
def delete_all_water(request):
    Water.objects.all().delete()

    return Response({"message": "All Water objects deleted successfully."},status=status.HTTP_200_OK)