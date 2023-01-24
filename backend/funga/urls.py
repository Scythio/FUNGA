from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # path('', views.index, name='index'),
    path('mushroom-list', views.mushroom_list, name='mushroom.list'),
    path('post-list', views.post_list, name='post.list'),
    path('post', views.post, name='post'),
    path('upvote', views.upvote, name='upvote'),
    path('downvote', views.downvote, name='downvote'),
    path('token', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register', views.RegisterView.as_view(), name='auth_register'),
    path('', views.getRoutes),

]