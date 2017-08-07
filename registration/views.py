# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.views import View

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
