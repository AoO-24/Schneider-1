# Generated by Django 5.0.3 on 2024-04-07 20:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('GuardianGear', '0002_rename_hours_hour_remove_appointment_id_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Hour',
            new_name='Hours',
        ),
    ]
