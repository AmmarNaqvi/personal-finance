# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-18 11:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0005_auto_20170818_1131'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='expenditurecategory',
            options={'verbose_name': 'Expenditure Category', 'verbose_name_plural': 'Expenditure Categories'},
        ),
        migrations.AlterModelOptions(
            name='expendituretransaction',
            options={'verbose_name': 'Expenditure Transaction', 'verbose_name_plural': 'Expenditure Transactions'},
        ),
        migrations.AlterModelOptions(
            name='incomecategory',
            options={'verbose_name': 'Income Category', 'verbose_name_plural': 'Income Categories'},
        ),
        migrations.AlterModelOptions(
            name='incometransaction',
            options={'verbose_name': 'Income Transaction', 'verbose_name_plural': 'Income Transactions'},
        ),
        migrations.AlterModelOptions(
            name='profile',
            options={'verbose_name': 'Profile', 'verbose_name_plural': 'Profiles'},
        ),
        migrations.AlterModelTable(
            name='expenditurecategory',
            table='expenditure_categories',
        ),
        migrations.AlterModelTable(
            name='expendituretransaction',
            table='expenditure_transactions',
        ),
        migrations.AlterModelTable(
            name='incomecategory',
            table='income_categories',
        ),
        migrations.AlterModelTable(
            name='incometransaction',
            table='income_transactions',
        ),
    ]