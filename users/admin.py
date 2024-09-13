from django.contrib import admin
from .models import users

class useradmin(admin.ModelAdmin):
    model = users
    list_display = ('name','username','email','id')



admin.site.register(users,useradmin)

# Register your models here.
