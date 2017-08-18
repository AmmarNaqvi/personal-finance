# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Profile, IncomeCategory, ExpenditureCategory, IncomeTransaction, ExpenditureTransaction

admin.site.register(Profile)
admin.site.register(IncomeCategory)
admin.site.register(ExpenditureCategory)
admin.site.register(IncomeTransaction)
admin.site.register(ExpenditureTransaction)
