from django.shortcuts import render, redirect, get_object_or_404
from .models import users
from .forms import UserForm

def user_list(request):
    context = {
     'users' :users.objects.all(),
    }

    return render(request, 'users/list.html', context)


def adduser(request):
    if request.method == 'POST':
         if request.POST.get('action') == 'confirm':
            name = request.POST.get('name')
            username = request.POST.get('username')
            email= request.POST.get('email')
            id = users.objects.last().id + 1
            if id==None:
               id=0
            user=users.objects.create(
                name = name,
                username = username,
                email = email,
                id = id,
            )
            user.save()
            return redirect('home-page')
         elif request.POST.get('action')=='cancel':
            return redirect('home-page')
        
    else:

      return render(request, 'users/adduser.html',)

def edituser(request, pk):
    user = users.objects.get(id = pk)
    context = {
        'user':user
    }
    if request.POST:
        if request.POST.get('action') == 'confirm':
            user.name = request.POST.get('name')
            user.username = request.POST.get('username')
            user.email= request.POST.get('email')
            user.id = pk

            user.save()
            return redirect('home-page')
        elif request.POST.get('action')=='cancel':
            return redirect('home-page')
    else:
     return render(request,'users/edit_form.html',context)
    
def delete(request,pk):
   
   user = users.objects.get(id = pk)
   context = {
      'user':user
   }

   if request.POST:
      if request.POST.get('action') == 'confirm':
         user.delete()
         return redirect('home-page')
      elif request.POST.get('action')=='cancel':
         return redirect('home-page')
   else:
      
    return render(request,'users/delete.html',context)