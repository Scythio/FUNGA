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
