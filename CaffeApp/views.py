import json

from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.generic import DetailView

from .models import *

from CaffeApp.models import Product
from .utils import cookieCart


def home_page(request):
    product = Product.objects.all()
    cookieData = cookieCart(request)
    cartItems = cookieData['cartItems']
    return render(request, "home-page.html", {'product': product,
                                              'cartItems': cartItems})


def categories(request, categories):
    product = Product.objects.filter(category=categories)
    cookieData = cookieCart(request)
    cartItems = cookieData['cartItems']
    context = {'category': categories,
               'product': product,
               'cartItems': cartItems,
               }
    return render(request, "dish-categories.html", context)


def dish_description(request, slug):
    product = Product.objects.get(slug=slug)

    cookieData = cookieCart(request)
    cartItems = cookieData['cartItems']
    context = {'product': product,
               'cartItems': cartItems
               }

    return render(request, 'dish-description-page.html', context)


def checkout_page(request):
    cookieData = cookieCart(request)

    items = cookieData['items']
    order = cookieData['order']
    cartItems = cookieData['cartItems']

    if cartItems >= 1:
        context = {'items': items,
                   'order': order,
                   'cartItems': cartItems
                   }
        return render(request, "checkout-order-page.html", context)
    else:
        return redirect("home")


def proc(request):
    return JsonResponse('Item was added', safe=False)


def cart(request):
    cookieData = cookieCart(request)
    sauces = Product.objects.filter(category="Sauce")

    items = cookieData['items']
    order = cookieData['order']
    cartItems = cookieData['cartItems']

    context = {'items': items,
               'order': order,
               'cartItems': cartItems,
               'sauce': sauces,
               }
    return render(request, "cart.html", context)


def sauces(request):
    model = Product.objects.filter(category="Sauce")
    return render(request, 'tjh.html', {"sauces": model})

