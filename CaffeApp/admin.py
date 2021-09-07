from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.utils.safestring import mark_safe

from .models import *


@admin.register(Product)
class ShopAdmin(ModelAdmin):
    readonly_fields = ("get_image",
                       )

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url} width="50" height="60">')
    get_image.short_description = "Image"
