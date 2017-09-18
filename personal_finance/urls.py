"""personal_finance URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include
from django.conf import settings
from django.conf.urls.static import static
from registration.views import SignUpView, HomeView, ProfileView, UserAPI, ProfileAPI, IncomeCategoryAPI, ExpenditureCategoryAPI, IncomeTransactionAPI, ExpenditureTransactionAPI

from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', UserAPI)
router.register(r'profiles', ProfileAPI)
router.register(r'income_categories', IncomeCategoryAPI)
router.register(r'expenditure_categories', ExpenditureCategoryAPI)
router.register(r'income_transactions', IncomeTransactionAPI)
router.register(r'expenditure_transactions', ExpenditureTransactionAPI)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^signup$', SignUpView.as_view(), name='signup'),
    url(r'', include('django.contrib.auth.urls')),
    url(r'^profile/$', ProfileView.as_view(), name='profile'),
    url(r'^api/', include(router.urls)),
]

urlpatterns += [
    url(r'^api/', include('rest_framework.urls',
                          namespace='rest_framework')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
