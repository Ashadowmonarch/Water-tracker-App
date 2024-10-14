from rest_framework import serializers
from .models import Water

class WaterSerializer(serializers.ModelSerializer):
    time_added = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    
    class Meta:
        model = Water
        fields = ['id', 'name', 'time_added']
    
    def get_time_added(self, obj):
        return obj.time_added.strftime("%I:%M %p | %B %d, %Y")
    
    def get_name(self, obj):
        if len(obj.name) > 20:
            return f'{obj.name[:20]}...'
        return obj.name