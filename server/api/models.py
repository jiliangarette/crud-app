from django.db import models

# N O T E S

#   django use ORM (object relational mapping)
#   it maps python project to a dabase instance


# to create a database table
class BlogPost(models.Model):
    # to create a column
    title = models.CharField(max_length=100)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    
    # to see a data when a model is created
    def __str__(self):
        return self.title