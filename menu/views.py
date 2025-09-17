

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Booking, Category, MenuItem
from .serializers import ProductSerializer, BookingSerializer, CategorySerializer, MenuItemSerializer

class BookingApiView(APIView):
    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class ProductApiView(APIView):
    def get(self, request):
        products = Booking.objects.all()
        serializers = ProductSerializer(products, many=True)
        return Response(serializers.data)
    
    
class CategoryApiView(APIView):
    def get(self, request):
        categories = Booking.objects.all()
        serializers = CategorySerializer(categories, many=True)
        return Response(serializers.data)
    


class MenuItemApiView(APIView):
    def get(self,request):
        menuitems = MenuItem.objects.all()
        serializers = MenuItemSerializer(menuitems, many=True)
        return Response(serializers.data)


