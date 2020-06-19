from django.db import models

# A class to store name and text to leave notes on the page
class Note(models.Model):
    name = models.CharField("Name", max_length=240)
    text = models.CharField("Text", max_length=500)

def __str__(self):
    return self.name
