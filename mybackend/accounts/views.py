# accounts/views.py
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Verifica se o username e password estão presentes
        if not username or not password:
            return Response(
                {"error": "Por favor, forneça username e password."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Autentica o usuário
        user = authenticate(username=username, password=password)
        
        # Caso o usuário seja autenticado, cria ou recupera o token de autenticação
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response(
                {"token": token.key, "message": "Login realizado com sucesso"},
                status=status.HTTP_200_OK
            )
        else:
            # Caso contrário, retorna erro de credenciais inválidas
            return Response(
                {"error": "Credenciais inválidas. Verifique e tente novamente."},
                status=status.HTTP_401_UNAUTHORIZED
            )
