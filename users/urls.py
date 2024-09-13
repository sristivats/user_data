from django.urls import path
from . import views

urlpatterns=[
   path('',views.user_list,name='home-page'),
   path('adduser/', views.adduser, name='adduser'),
   path('edituser/<int:pk>/', views.edituser, name='edituser'),
   path('delete/<int:pk>/', views.delete, name='deleteuser'),
]