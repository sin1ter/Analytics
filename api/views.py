from django.shortcuts import render
from django.http import JsonResponse
from random import randint
# Create your views here.

def totalviews(request):
    
    return JsonResponse({
        'labels' : ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        'data' : [randint(1000*i, 1000*(i + 1)) for i in range (6)],
    })