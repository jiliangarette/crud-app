from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import BlogPostSerialzer
from .models import BlogPost
from rest_framework.views import APIView

# to create a crud CREATE
class BlogPostListCreate(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerialzer
    
    # to overide an view class
    def delete(self, request, *args,**kwargs):
        # to delete all
        BlogPost.objects.all().delete() 
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class BlogPostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerialzer
    lookup_field = "pk"
    
class Bloglists(APIView):
    def get(self, request, format=None):
        title = request.query_params.get("title", "")
        
        if title:
            blog_posts = BlogPost.objects.filter(title__icontains=title)
        else:
            blog_posts = BlogPost.objects.all()
        
        serializer = BlogPostSerialzer(blog_posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        