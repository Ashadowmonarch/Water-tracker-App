from rest_framework import serializers
from .models import Water

class WaterSerializer(serializers.ModelSerializer):
    time_added = serializers.SerializerMethodField()
    class Meta:
        model = Water
        fields = ['id', 'name', 'time_added']
    def get_time_added(self, obj):
        return obj.time_added.strftime("%I:%M %p | %B %d, %Y")
