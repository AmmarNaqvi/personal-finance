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

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .serializers import ProfileSerializer, IncomeCategorySerializer, ExpenditureCategorySerializer, IncomeTransactionSerializer, ExpenditureTransactionSerializer
from .serializers import UserSerializer

from rest_framework.decorators import detail_route
from rest_framework import renderers


class SignUpView(View):

    def get(self, request):

        return render(request, 'registration/signup.html')

    def post(self, request):

        user = User.objects.create_user(request.POST['username'], request.POST[
                                        'email'], request.POST['password'])
        user.save()

        return render(request, 'registration/login.html')


class HomeView(View):

    def get(self, request):
        return render(request, 'registration/index.html')


class ProfileView(View):

    def get(self, request):

        user_form = UserForm(instance=request.user)
        profile_form = ProfileForm(instance=request.user.profile)

        return render(request, 'registration/profile.html', {
            'user_form': user_form,
            'profile_form': profile_form
        })

    def post(self, request):

        user_form = UserForm(request.POST, instance=request.user)
        profile_form = ProfileForm(request.POST, instance=request.user.profile)

        if user_form.is_valid() and profile_form.is_valid():
            profile_form.save()
            user_form.save()
            return redirect('home')

        return render(
            request,
            'registration/profile.html',
            {
                'user_form': user_form,
                'profile_form': profile_form
            }
        )


class UserAPI(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        user = self.get_object()
        return Response(user.highlighted)


class ProfileAPI(ModelViewSet):

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        profile = self.get_object()
        return Response(profile.highlighted)


class IncomeCategoryAPI(ModelViewSet):

    queryset = IncomeCategory.objects.all()
    serializer_class = IncomeCategorySerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        income_category = self.get_object()
        return Response(income_category.highlighted)


class ExpenditureCategoryAPI(ModelViewSet):

    queryset = ExpenditureCategory.objects.all()
    serializer_class = ExpenditureCategorySerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        expenditure_category = self.get_object()
        return Response(expenditure_category.highlighted)


class IncomeTransactionAPI(ModelViewSet):

    queryset = IncomeTransaction.objects.all()
    serializer_class = IncomeTransactionSerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        income_transaction = self.get_object()
        return Response(income_transaction.highlighted)


class ExpenditureTransactionAPI(ModelViewSet):

    queryset = ExpenditureTransaction.objects.all()
    serializer_class = ExpenditureTransactionSerializer

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        expenditure_transaction = self.get_object()
        return Response(expenditure_transaction.highlighted)
