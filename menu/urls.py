from django.urls import path
from . views import BookingApiView, ProductApiView, CategoryApiView, MenuItemApiView
urlpatterns = [
    path('booking/', BookingApiView.as_view(), name='booking'),
    path('product/', ProductApiView.as_view(), name='product_details'),
    path('category/', CategoryApiView.as_view(), name='category_details'),
    path('menu/', MenuItemApiView.as_view(), name='menu_details')
    
    
]
