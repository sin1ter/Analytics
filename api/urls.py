from django.urls import path
from . import views

urlpatterns = [
    path('total-views/', views.totalviews, name='api-total'),
]
