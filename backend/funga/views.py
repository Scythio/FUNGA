from django.http import HttpResponse


def index(request):
    return HttpResponse(27733)

def mushroom_list(request):
    list = [
        {'name': 'borowik', 'edible': True},
        {'name': 'muchomor', 'edible': False},
    ]
    return HttpResponse(list)