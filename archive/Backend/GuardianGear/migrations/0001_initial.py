# Generated by Django 5.0.3 on 2024-04-06 21:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('driver_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('license_number', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appt_start', models.DateTimeField(blank=True, null=True)),
                ('appt_end', models.DateTimeField(blank=True, null=True)),
                ('estimated_time', models.DecimalField(decimal_places=2, max_digits=5)),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GuardianGear.driver')),
            ],
        ),
        migrations.CreateModel(
            name='Hours',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recorded_time', models.DecimalField(decimal_places=2, max_digits=5)),
                ('date', models.DateField(blank=True, null=True)),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GuardianGear.driver')),
            ],
        ),
    ]