from django.db import models
from django.conf import settings


class Mushroom(models.Model):
    EDIBLE = 1
    INEDIBLE = 2 
    POISONOUS = 3
    EDIBILITY_CHOICES = [
        (EDIBLE, 'EDIBLE'),
        (INEDIBLE, 'INEDIBLE'),
        (POISONOUS, 'POISONOUS'),
    ]
    name = models.CharField(max_length=60)
    latin_name = models.CharField(max_length=60, null=True, blank=True)
    edible = models.BooleanField(default=False)
    edibility = models.SmallIntegerField(choices=EDIBILITY_CHOICES, default=POISONOUS)
    description = models.CharField(max_length=640, null=True, blank=True)


class DummyUser(models.Model):  #FIXME FOR DEVELOPEMENT ONLY!
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)


class Post(models.Model):
    mushroom = models.ForeignKey(
        Mushroom,
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        DummyUser,  #FIXME FOR DEVELOPEMENT ONLY!
        # settings.AUTH_USER_MODEL,  # FIXME
        on_delete=models.CASCADE,
    )
    datetime = models.DateTimeField(auto_now_add=True)
    quantity = models.SmallIntegerField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    image = models.ImageField(upload_to='db/post/img/')


class Vote(models.Model):
    user = models.ForeignKey(
        DummyUser,  #FIXME FOR DEVELOPEMENT ONLY!
        # settings.AUTH_USER_MODEL,  # FIXME
        on_delete=models.CASCADE,
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
    )
    datetime = models.DateTimeField(auto_now_add=True)


class Upvote(Vote):
    pass


class Downvote(Vote):
    pass
