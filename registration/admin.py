# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Profile, IncomeCategory, ExpenditureCategory, IncomeTransaction, ExpenditureTransaction

admin.site.register(IncomeCategory)
admin.site.register(ExpenditureCategory)
admin.site.register(IncomeTransaction)
admin.site.register(ExpenditureTransaction)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    fields = ('user', 'location', 'birth_date', 'bio')
    list_display = ('user_full_name', 'location', 'birth_date', 'bio')

    def user_full_name(self, obj):
        return ("%s %s" % (obj.user.first_name, obj.user.last_name))

    user_full_name.short_description = 'Name'

    list_filter = ('location', 'birth_date')
    empty_value_display = '-empty-'
    search_fields = ['user__email', 'user__first_name', 'user__last_name']
