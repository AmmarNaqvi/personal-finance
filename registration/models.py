# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Profile(models.Model):
    class Meta:
        verbose_name = _('Profile')
        verbose_name_plural = _('Profiles')
        db_table = 'user_profile'

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Balance(models.Model):
    class Meta:
        verbose_name = _('Balance')
        verbose_name_plural = _('Balances')
        db_table = 'user_balance'

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def create_user_balance(sender, instance, created, **kwargs):
    if created:
        Balance.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_balance(sender, instance, **kwargs):
    instance.balance.save()

class IncomeCategory(models.Model):
    class Meta:
        verbose_name = _('Income Category')
        verbose_name_plural = _('Income Categories')
        db_table = 'income_categories'

    name = models.CharField(max_length=30)
    icon = models.ImageField(upload_to = 'images/income_categories/')
    def __str__(self):
        return self.name

class ExpenditureCategory(models.Model):
    class Meta:
        verbose_name = _('Expenditure Category')
        verbose_name_plural = _('Expenditure Categories')
        db_table = 'expenditure_categories'

    name = models.CharField(max_length=30)
    icon = models.ImageField(upload_to = 'images/expenditure_categories/')
    def __str__(self):
        return self.name

class IncomeTransaction(models.Model):
    class Meta:
        verbose_name = _('Income Transaction')
        verbose_name_plural = _('Income Transactions')
        db_table = 'income_transactions'

    category = models.ForeignKey(IncomeCategory, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    def __str__(self):
        return self.amount

class ExpenditureTransaction(models.Model):
    class Meta:
        verbose_name = _('Expenditure Transaction')
        verbose_name_plural = _('Expenditure Transactions')
        db_table = 'expenditure_transactions'

    category = models.ForeignKey(ExpenditureCategory, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    def __str__(self):
        return self.amount
