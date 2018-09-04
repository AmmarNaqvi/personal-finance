
from .models import IncomeTransaction, ExpenditureTransaction
from django.db.models import Sum
from datetime import datetime


def calculate_balance(user_id):
    today = datetime.now()

    expenditure = ExpenditureTransaction.objects.filter(
        user_id=user_id, created_at__year=today.month).aggregate(total_amount=Sum('amount'))
    income = IncomeTransaction.objects.filter(
        user_id=user_id, created_at__year=today.month).aggregate(total_amount=Sum('amount'))

    if expenditure["total_amount"] is None:
        expenditure["total_amount"] = 0
    if income["total_amount"] is None:
        income["total_amount"] = 0

    balance = income["total_amount"] - expenditure["total_amount"]
    return (balance)
