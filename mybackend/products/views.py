from django.http import JsonResponse
from django.views import View
from django.contrib.auth import authenticate, login
from django.middleware.csrf import CsrfViewMiddleware
from django.shortcuts import render

class LoginView(View):
    def post(self, request):
        # Extraia as credenciais do corpo da requisição
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Autentica o usuário
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)  # Loga o usuário
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

class RegisterProductView(View):
    def get(self, request):
        # Lógica para exibir o formulário de registro de produtos
        return render(request, 'products/register.html')

class ArchivedProductsView(View):
    def get(self, request):
        # lógica para exibir produtos arquivados
        return render(request, 'products/archived.html')

class ManageUsersView(View):
    def get(self, request):
        # lógica para gerenciar usuários
        return render(request, 'products/manage_users.html')



# from django.shortcuts import render

# # Create your views here.
# from django.views import View
# from django.shortcuts import render

# class RegisterProductView(View):
#     def get(self, request):
#         # lógica para exibir o formulário de registro
#         return render(request, 'products/register.html')

# class ArchivedProductsView(View):
#     def get(self, request):
#         # lógica para exibir produtos arquivados
#         return render(request, 'products/archived.html')

# class ManageUsersView(View):
#     def get(self, request):
#         # lógica para gerenciar usuários
#         return render(request, 'products/manage_users.html')
