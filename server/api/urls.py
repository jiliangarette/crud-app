from django.urls import path
from . import views

urlpatterns = [
    path("blogs/", 
         views.BlogPostListCreate.as_view(), 
         name="blogpost-view-create"),
    path("blogs/<int:pk>/", 
         views.BlogPostRetrieveUpdateDestroy.as_view(), 
         name="update")
]