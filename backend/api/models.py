from django.db import models

class Water(models.Model):
    name = models.CharField(max_length=200)
    time_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'