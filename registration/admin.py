# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Profile, IncomeCategory, ExpenditureCategory, IncomeTransaction, ExpenditureTransaction

class ProfileAdmin(admin.ModelAdmin):
    fields = ('user', 'location', 'birth_date', 'bio')
    list_display = ('user', 'location', 'birth_date', 'bio')


admin.site.register(Profile, ProfileAdmin)
admin.site.register(IncomeCategory)
admin.site.register(ExpenditureCategory)
admin.site.register(IncomeTransaction)
admin.site.register(ExpenditureTransaction)

