import funga.models as models

def populate_mushroom():
    
    models.Mushroom.objects.get_or_create(
        name='Borowik szlachetny',
        latin_name = 'Boletus edulis Bull',
        edible = True,
        edibility = models.Mushroom.EDIBLE,
    )

    models.Mushroom.objects.get_or_create(
        name='Koźlarz babka',
        latin_name = 'Leccinum scabrum',
        edible = True,
        edibility = models.Mushroom.EDIBLE,
    )

    models.Mushroom.objects.get_or_create(
        name='Maślak zwyczajny',
        latin_name = 'Suillus luteus',
        edible = True,
        edibility = models.Mushroom.EDIBLE,
    )

    models.Mushroom.objects.get_or_create(
        name='Podgrzybek brunatny',
        latin_name = 'Imleria badia',
        edible = True,
        edibility = models.Mushroom.EDIBLE,
    )

    models.Mushroom.objects.get_or_create(
        name='Mleczaj rydz',
        latin_name = 'Lactarius deliciosus',
        edible = True,
        edibility = models.Mushroom.EDIBLE,
    )

    models.Mushroom.objects.get_or_create(
        name='Pieprznik jadalny',
        latin_name = 'Cantharellus cibarius',
        edible = True,
        edibility = models.Mushroom.EDIBLE,
    )

    models.Mushroom.objects.get_or_create(
        name='Muchomor czerwony',
        latin_name = 'Amanita muscaria',
        edible = False,
        edibility = models.Mushroom.POISONOUS,
    )

    models.Mushroom.objects.get_or_create(
        name='Purchawka chropowata',
        latin_name = 'Lycoperdon perlatum',
        edible = False,
        edibility = models.Mushroom.INEDIBLE,
    )


def populate_post():
    models.Post.objects.get_or_create(pk=1,mushroom_id=7,quantity=50,latitude=52.3322,longitude=20.7087,user_id=1,image='/db/post/img/f1.png')
    models.Post.objects.get_or_create(pk=2,mushroom_id=1,quantity=10,latitude=52.11,longitude=20.66,user_id=2,image='/db/post/img/f2.png')
    models.Post.objects.get_or_create(pk=3,mushroom_id=5,quantity=50,latitude=53.5,longitude=21.11,user_id=3,image='/db/post/img/f3.png')
    models.Post.objects.get_or_create(pk=4,mushroom_id=2,quantity=100,latitude=53.1,longitude=21.2,user_id=3,image='/db/post/img/f4.png')
    models.Post.objects.get_or_create(pk=5,mushroom_id=2,quantity=50,latitude=51.22,longitude=20.9,user_id=4,image='/db/post/img/f5.png')
    models.Post.objects.get_or_create(pk=6,mushroom_id=6,quantity=200,latitude=54.0022,longitude=20.5,user_id=1,image='/db/post/img/f6.png')
    models.Post.objects.get_or_create(pk=7,mushroom_id=6,quantity=50,latitude=52.22,longitude=22.2,user_id=4,image='/db/post/img/f7.png')
    models.Post.objects.get_or_create(pk=8,mushroom_id=6,quantity=200,latitude=53.0022,longitude=18.6,user_id=1,image='/db/post/img/f8.png')

