

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Booking, Category, MenuItem
from .serializers import ProductSerializer, BookingSerializer, CategorySerializer, MenuItemSerializer

class BookingApiView(APIView):
    def get(self, request):
        bookings = Booking.objects.all()
        serializers = BookingSerializer(bookings, many=True)
        return Response(serializers.data)

    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


