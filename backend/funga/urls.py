from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('mushroom-list', views.mushroom_list, name='mushroom.list'),
]