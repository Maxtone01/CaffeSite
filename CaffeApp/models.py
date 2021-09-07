from django.db import models

# Create your models here.
from django.template.defaultfilters import slugify
from django.urls import reverse


class Product(models.Model):
    slug = models.SlugField(max_length=20, unique=True, default=0)
    name = models.CharField(max_length=200, null=False)
    description = models.CharField(max_length=200, null=False, default=None, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    weight = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=False, default=' ')
    image = models.ImageField(null=True, blank=True)

    def get_absolute_url(self):
        return reverse('description', kwargs={'slug': self.slug})

    def __str__(self):
        return f'{self.name}'
