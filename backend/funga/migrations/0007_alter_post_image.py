# Generated by Django 4.1.4 on 2023-01-25 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('funga', '0006_alter_post_user_alter_vote_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='db/post/img/'),
        ),
    ]
