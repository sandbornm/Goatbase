from django.db import models

# Create your models here.

class Post(models.Model):
	title = models.CharField(max_length=100)
	tags = models.TextField(max_length=300)
	image = models.ImageField(upload_to='posts_images')

	def __str__(self):
		return self.title