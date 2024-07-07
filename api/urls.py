from django.urls import path
from . import views

urlpatterns = [
    path('total-views/', views.totalviews, name='api-total'),
    path('datatable-api/', views.datatable_api, name='datatable-api'),
]
