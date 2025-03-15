
from rest_framework import serializers
from .models import BlogPost

# serializers.py – makes data api-friendly 

# turns models into json (serialization)  
# turns json into models (deserialization)  
# auto-generates fields with modelserializer  
# manual control with serializer  
# validates data before saving  
# basically, the api’s middleman 

# to create a serializer
class BlogPostSerialzer(serializers.ModelSerializer):
    class Meta: 
        model = BlogPost
        # specify what to return as api
        fields = ['id', 'title', 'content', 'published_date']
    