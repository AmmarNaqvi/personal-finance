# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User


def home(request):
    return render(request, 'registration/index.html')


def signup(request):
	if 'username' not in request.POST:
	    return render(request, 'registration/signup.html')
	else:
	    user = User.objects.create_user(request.POST['username'], request.POST[
	                                    'email'], request.POST['password'])
	    user.save()
	    return render(request, 'registration/login.html')