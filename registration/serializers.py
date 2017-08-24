from rest_framework import serializers

from .models import Profile, IncomeCategory, ExpenditureCategory, IncomeTransaction, ExpenditureTransaction


class ProfileSerializer(serializers.ModelSerializer):
	"""docstring for ProfileSerializer"""
	class Meta:
		model = Profile
		fields = ('user', 'location', 'birth_date', 'bio')



class IncomeCategorySerializer(serializers.ModelSerializer):
	"""docstring for IncomeCategorySerializer"""
	class Meta:
		model = IncomeCategory
		fields = ('name', 'image')



class ExpenditureCategorySerializer(serializers.ModelSerializer):
	"""docstring for ExpenditureCategorySerializer"""
	class Meta:
		model = ExpenditureCategory
		fields = ('name', 'image')


class IncomeTransactionSerializer(serializers.ModelSerializer):
	"""docstring for IncomeTransactionSerializer"""
	class Meta:
		model = IncomeTransaction
		fields = ('category_id', 'user_id', 'amount')


class ExpenditureTransactionSerializer(serializers.ModelSerializer):
	"""docstring for ExpenditureTransactionSerializer"""
	class Meta:
		model = ExpenditureTransaction
		fields = ('category_id', 'user_id', 'amount')
