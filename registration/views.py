# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import redirect

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from .forms import ProfileForm, UserForm

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
		return render(request, 'registration/profile.html', {'user_form': user_form, 'profile_form': profile_form})

	def post(self, request):
		user_form = ProfileForm(request.POST, instance=request.user)
		profile_form = ProfileForm(request.POST, instance=request.user.profile)
		if all((user_form.is_valid(), profile_form.is_valid())):
			user = user_form.save()
			profile = profile_form.save(commit=False)
			profile.user = request.user
			profile.save()
			return redirect('home')