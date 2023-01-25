from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core import serializers
from django.core.files.base import ContentFile

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView

import base64
import logging
import json
from datetime import datetime

import funga.models as models
from funga.serializer import MyTokenObtainPairSerializer, RegisterSerializer

logger = logging.getLogger(__name__)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def mushroom_list(request):
    data = serializers.serialize('json', models.Mushroom.objects.all())
    return Response(data, status=status.HTTP_200_OK)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def post_list(request):
    data = []
    for post in models.Post.objects.all():
        upvotes = models.Upvote.objects.filter(post_id=post.id).count()
        downvotes = models.Downvote.objects.filter(post_id=post.id).count()
        data.append(json.dumps({
            'id': post.id,
            'mushroom_id': post.mushroom_id,
            'quantity': post.quantity,
            'latitude': float(post.latitude),
            'longitude': float(post.longitude),
            'upvotes': upvotes,
            'downvotes': downvotes,
        }))
    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def upvote(request):
    logger.warning(f'POST data:  {request.body}')
    data = json.loads(request.body.decode("utf-8"))
    logger.warning(f'POST data:  {data}')
    if data['action'] == 'remove':
        models.Upvote.objects.filter(post_id=data['post_id'],user_id=data['user_id']).delete()
        return Response({'response': 'OK', 'action': 'remove'}, status=status.HTTP_200_OK)
    else:
        models.Downvote.objects.filter(post_id=data['post_id'],user_id=data['user_id']).delete()
        models.Upvote.objects.get_or_create(post_id=data['post_id'],user_id=data['user_id'])
        return Response({'response': 'OK', 'action': 'add'}, status=status.HTTP_200_OK)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def downvote(request):
    logger.warning(f'POST data:  {request.body}')
    data = json.loads(request.body.decode("utf-8"))
    logger.warning(f'POST data:  {data}')
    if data['action'] == 'remove':
        logger.warning(f'kkkk')
        models.Downvote.objects.filter(post_id=data['post_id'],user_id=data['user_id']).delete()
        return Response({'response': 'OK', 'action': 'remove'}, status=status.HTTP_200_OK)
    else:
        logger.warning(f'gggg')
        models.Upvote.objects.filter(post_id=data['post_id'],user_id=data['user_id']).delete()
        models.Downvote.objects.get_or_create(post_id=data['post_id'],user_id=data['user_id'])
        return Response({'response': 'OK', 'action': 'add'}, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def post(request):
    data = json.loads(request.body.decode("utf-8"))
    if request.method == 'GET':
        logger.warning(f'POST data:  {request.body}')
        logger.warning(f'POST data:  {data}')

        post = models.Post.objects.get(id=data['post_id'])
        upvotes = models.Upvote.objects.filter(post_id=post.id).count()
        downvotes = models.Downvote.objects.filter(post_id=post.id).count()
        user_upvoted = models.Upvote.objects.filter(post_id=post.id,user_id=data['user_id']).exists()
        user_downvoted = models.Downvote.objects.filter(post_id=post.id,user_id=data['user_id']).exists()
        response = json.dumps({
            'id': post.id,
            'mushroom_id': post.mushroom_id,
            'quantity': post.quantity,
            'latitude': float(post.latitude),
            'longitude': float(post.longitude),
            'upvotes': upvotes,
            'downvotes': downvotes,
            'user_id': post.user_id,
            'user_upvoted': user_upvoted,
            'user_downvoted': user_downvoted,
            # 'image': post.image,
        })
        return Response(response, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        logger.warning(f'POST data:  {request}')
        models.Post.objects.create(
            mushroom_id = data["mushroom_id"],
            quantity = data['quantity'],
            latitude = data['latitude'],
            longitude= data['longitude'],
            user_id = data['user_id'],
            image = ContentFile(base64.b64decode(data['image'])),
        )
        return Response({'response': 'OK'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def register(request):
    data = json.loads(request.body.decode("utf-8"))
    if models.DummyUser.objects.filter(username=data['username']).exists():
        return Response({'response': 'FAIL', 'message': 'username already exists'}, status=status.HTTP_200_OK)
    if models.DummyUser.objects.filter(email=data['email']).exists():
        return Response({'response': 'FAIL', 'message': 'email already exists'}, status=status.HTTP_200_OK)
    new_user = models.DummyUser.objects.create(
        username = data['username'],
        email = data['email'],
        password = data['password']
    )
    return Response({'response': 'OK', 'message': 'user created'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def log_in(request):
    data = json.loads(request.body.decode("utf-8"))
    if models.DummyUser.objects.filter(username=data['username'], password=data['password']).exists():
        user = models.DummyUser.objects.filter(username=data['username'], password=data['password']).first()
        return Response({'response': 'OK', 'user_id': user.id}, status=status.HTTP_200_OK)
    return Response({'response': 'FAIL', 'user_id': -1}, status=status.HTTP_200_OK)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/funga/token/',
        '/funga/register/',
        '/funga/token/refresh/'
    ]
    return Response(routes)
