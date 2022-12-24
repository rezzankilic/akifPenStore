from akifpenstore.models import Product
from django.http import JsonResponse
from akifpenstore.serializers import ProductSerializer

def akifpenstore(request):
    data = Product.objects.all()
    serializer = ProductSerializer(data, many=True)
    return JsonResponse({'products': serializer.data})