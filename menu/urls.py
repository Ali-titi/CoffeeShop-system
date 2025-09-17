from django.urls import path
from . views import BookingApiView
urlpatterns = [
    path('booking/', BookingApiView.as_view(), name='booking'),
    
]
