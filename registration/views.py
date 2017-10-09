# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import redirect

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from .forms import ProfileForm, UserForm
from .models import Profile, IncomeCategory, ExpenditureCategory, IncomeTransaction, ExpenditureTransaction
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .serializers import ProfileSerializer, IncomeCategorySerializer, ExpenditureCategorySerializer, IncomeTransactionSerializer, ExpenditureTransactionSerializer
from .serializers import UserSerializer

from rest_framework.decorators import detail_route
from rest_framework import renderers

from .services import calculate_balance

import datetime

class HomeView(View):

    def get(self, request):
        return render(request, 'registration/index.html')

class UserAPI(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProfileAPI(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class IncomeCategoryAPI(ModelViewSet):
    queryset = IncomeCategory.objects.all()
    serializer_class = IncomeCategorySerializer

class ExpenditureCategoryAPI(ModelViewSet):
    queryset = ExpenditureCategory.objects.all()
    serializer_class = ExpenditureCategorySerializer

class IncomeTransactionAPI(ModelViewSet):
    queryset = IncomeTransaction.objects.all()
    serializer_class = IncomeTransactionSerializer
    def get_queryset(self):
        queryset = IncomeTransaction.objects.all()
        user_id = self.request.query_params.get('user_id', None)
        interval = self.request.query_params.get('interval', None)
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        if interval is not None:
			today = datetime.datetime.now()
			if interval == "year":
				queryset = queryset.filter(created_at__year=today.year)
			if interval == "month":
				queryset = queryset.filter(created_at__year=today.year)
				queryset = queryset.filter(created_at__month=today.month)
			if interval == "week":
				queryset = queryset.filter(created_at__year=today.year)
				queryset = queryset.filter(created_at__month=today.month)
				start_week = today - datetime.timedelta(today.weekday())
				end_week = start_week + datetime.timedelta(7)
				queryset = queryset.filter(created_at__range=[start_week, end_week])
			if interval == "day":
				queryset = queryset.filter(created_at__year=today.year)
				queryset = queryset.filter(created_at__month=today.month)
				start_week = today - datetime.timedelta(today.weekday())
				end_week = start_week + datetime.timedelta(7)
				queryset = queryset.filter(created_at__range=[start_week, end_week])
				queryset = queryset.filter(created_at__day=today.day)
			
        return queryset

class ExpenditureTransactionAPI(ModelViewSet):
    queryset = ExpenditureTransaction.objects.all()
    serializer_class = ExpenditureTransactionSerializer
    def get_queryset(self):
        queryset = ExpenditureTransaction.objects.all()
        user_id = self.request.query_params.get('user_id', None)
        interval = self.request.query_params.get('interval', None)
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        if interval is not None:
			today = datetime.datetime.now()
			if interval == "year":
				queryset = queryset.filter(created_at__year=today.year)
			if interval == "month":
				queryset = queryset.filter(created_at__year=today.year)
				queryset = queryset.filter(created_at__month=today.month)
			if interval == "week":
				queryset = queryset.filter(created_at__year=today.year)
				queryset = queryset.filter(created_at__month=today.month)
				start_week = today - datetime.timedelta(today.weekday())
				end_week = start_week + datetime.timedelta(7)
				queryset = queryset.filter(created_at__range=[start_week, end_week])
			if interval == "day":
				queryset = queryset.filter(created_at__year=today.year)
				queryset = queryset.filter(created_at__month=today.month)
				start_week = today - datetime.timedelta(today.weekday())
				end_week = start_week + datetime.timedelta(7)
				queryset = queryset.filter(created_at__range=[start_week, end_week])
				queryset = queryset.filter(created_at__day=today.day)
			
        return queryset
