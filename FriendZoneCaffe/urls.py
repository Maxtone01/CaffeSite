"""FriendZoneCaffe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from CaffeApp.views import categories, cart, checkout_page, home_page, proc, dish_description, sauces

urlpatterns = [
    path('', home_page, name='home'),
    path('dish-categories/<str:categories>', categories, name="category"),
    path('dish/<slug:slug>', dish_description, name="description"),
    path('cart/', cart),
    path('checkout/', checkout_page),
    path('admin/', admin.site.urls),
    path('process_order/', proc, name="process_order"),
    path('sauces/', sauces)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
