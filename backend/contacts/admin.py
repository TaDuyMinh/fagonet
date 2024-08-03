# from django.contrib import admin
# from .models import Contact
# class ContactsAdmin( admin.ModelAdmin):
#     list_display = ('id','name', 'email', 'message', 'date_sent')
#     # readonly_fields = ('name', 'email', 'message', 'date_sent')
#     search_fields = ('name','email')
    
#     def get_actions(self, request):
#         actions = super().get_actions(request)
#         del actions['delete_selected']
#         return actions
# admin.site.register(Contact, ContactsAdmin)
from django.contrib import admin
from admin_list_charts.admin import ListChartMixin
from .models import Contact

class ContactAdmin(ListChartMixin,admin.ModelAdmin):
    list_display = ["name", "email", "message", "date_sent"]
    date_hierarchy = "date_sent"
    search_fields = ["name","email","message","date_sent"]
admin.site.register(Contact, ContactAdmin)

