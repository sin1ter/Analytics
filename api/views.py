from django.shortcuts import render
from django.http import JsonResponse
from random import randint
from .models import *


# Create your views here.

def totalviews(request):
    queryset = TotalViewsModel.objects.all()
    dct = {
        "labels": [],
        "data": [],
    }
    for item in queryset:
        dct["labels"].append(item.label)
        dct["data"].append(item.views)
    # print(queryset)  
    print(dct)
    return JsonResponse(dct) 

def datatable_api(request):
    return JsonResponse({
        "data": [
            ['Top 10 VS code Shortcuts', "15-11-2012", "234345215"], 
            ['Django', "15-11-2012", "23413"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"], 
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
            ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
        ]
    })
