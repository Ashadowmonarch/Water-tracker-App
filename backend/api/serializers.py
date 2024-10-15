from rest_framework import serializers
from .models import Water
from django.utils.timezone import localtime

class WaterSerializer(serializers.ModelSerializer):
    time_added = serializers.SerializerMethodField()
    
    class Meta:
        model = Water
        fields = ['id', 'name', 'time_added']

    def get_time_added(self, obj):
        # Convert time_added to the local timezone (Toronto) and format it
        local_time = localtime(obj.time_added)
        return local_time.strftime("%I:%M %p | %B %d, %Y")
    
    def to_representation(self, instance):
        """Modify the output to truncate name if necessary."""
        representation = super().to_representation(instance)
        if len(representation['name']) > 19:
            representation['name'] = f'{representation["name"][:17]}...'
        return representation
