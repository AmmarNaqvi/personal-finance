# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-30 13:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0009_auto_20170830_1332'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expendituretransaction',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='incometransaction',
            old_name='category_id',
            new_name='category',
        ),
        migrations.RenameField(
            model_name='incometransaction',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='expendituretransaction',
            name='category_id',
        ),
        migrations.AddField(
            model_name='expendituretransaction',
            name='category',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='registration.ExpenditureCategory'),
            preserve_default=False,
        ),
    ]
