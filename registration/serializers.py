from rest_framework import serializers

from .models import Profile, IncomeCategory, ExpenditureCategory, IncomeTransaction, ExpenditureTransaction
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'created_at', 'updated_at')

class ProfileSerializer(serializers.ModelSerializer):
	"""docstring for ProfileSerializer"""
	class Meta:
		model = Profile
		fields = ('user', 'location', 'birth_date', 'bio', 'created_at', 'updated_at')



class IncomeCategorySerializer(serializers.ModelSerializer):
	"""docstring for IncomeCategorySerializer"""
	class Meta:
		model = IncomeCategory
		fields = ('id', 'name', 'icon', 'created_at', 'updated_at')



class ExpenditureCategorySerializer(serializers.ModelSerializer):
	"""docstring for ExpenditureCategorySerializer"""
	class Meta:
		model = ExpenditureCategory
		fields = ('id', 'name', 'icon', 'created_at', 'updated_at')


class IncomeTransactionSerializer(serializers.ModelSerializer):
	"""docstring for IncomeTransactionSerializer"""
	class Meta:
		model = IncomeTransaction
		fields =  ('id', 'category', 'user', 'amount', 'created_at', 'updated_at')


class ExpenditureTransactionSerializer(serializers.ModelSerializer):
	"""docstring for ExpenditureTransactionSerializer"""
	class Meta:
		model = ExpenditureTransaction
		fields =  ('id', 'category', 'user', 'amount', 'created_at', 'updated_at')
