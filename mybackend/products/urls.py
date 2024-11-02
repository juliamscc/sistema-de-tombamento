from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterProductView.as_view(), name='register_product'),
    path('archived/', views.ArchivedProductsView.as_view(), name='archived_products'),
    path('manage-users/', views.ManageUsersView.as_view(), name='manage_users'),
    # path('login/', views.LoginView.as_view(), name='login'),  # Adicione a rota de login aqui
]
