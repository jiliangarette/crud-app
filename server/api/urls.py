from django.urls import path
from . import views

urlpatterns = [
    path("blog-posts/", views.BlogPostListCreate.as_view(), name="blogpost-view-create")
]
