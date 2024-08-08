from django.contrib import admin
from .models import  Service, ServiceDeploymentStep, ServiceCompetitiveAdvantage


@admin.action(description="Activate selected service(s)")
def activate_services(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected service(s)")
def deactivate_services(modeladmin, request, queryset):
    queryset.update(is_active=False)


class ServiceDeploymentStep(admin.TabularInline):
    model = ServiceDeploymentStep
    extra = 0

class ServiceCompetitiveAdvantage(admin.TabularInline):
    model = ServiceCompetitiveAdvantage
    extra = 0

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'created_by', 'created_date', 'updated_by', 'updated_date','is_active')
    list_filter = ('is_active','created_by','updated_by')
    search_fields = ('title','id')
    actions = [activate_services, deactivate_services]
    inlines = [ServiceCompetitiveAdvantage,ServiceDeploymentStep]
    
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

admin.site.register(Service, ServiceAdmin)

