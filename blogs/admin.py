from django.contrib import admin
from .models import Blog


@admin.action(description="Activate selected blog(s)")
def activate_blogs(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected blog(s)")
def deactivate_blogs(modeladmin, request, queryset):
    queryset.update(is_active=False)


class BlogAdmin(admin.ModelAdmin):

    list_display = ('id','topic', 'created_by', 'created_date', 'updated_by', 'updated_date','is_active')
    search_fields = ('topic',)
    list_filter = ('is_active','created_by','updated_by')
    actions = [activate_blogs, deactivate_blogs]


    def save_model(self, request, obj, form, change):
        if not obj.pk:  # If the object is being created
            obj.created_by = request.user
        else:  # If the object is being updated
            obj.updated_by = request.user
        super().save_model(request, obj, form, change)

    # def get_actions(self, request):
    #     actions = super().get_actions(request)
    #     del actions['delete_selected']
    #     return actions

admin.site.register(Blog,BlogAdmin)
