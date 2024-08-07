from django.contrib import admin
from admin_list_charts.admin import ListChartMixin
from .models import Contact

class SolutionOrServiceFilter(admin.SimpleListFilter):
    title = 'Contact Type'
    parameter_name = 'contact_type'

    def lookups(self, request, model_admin):
        return (
            ('solution', 'Solution'),
            ('service', 'Service'),
            ('general', 'General'),
        )

    def queryset(self, request, queryset):
        if self.value() == 'solution':
            return queryset.filter(solution__isnull=False)
        elif self.value() == 'service':
            return queryset.filter(service__isnull=False)
        elif self.value() == 'general':
            return queryset.filter(solution__isnull=True, service__isnull=True)
        return queryset
      

class ContactAdmin(ListChartMixin,admin.ModelAdmin):
    list_display = ["name",'contact_about', "email", "message", "date_sent",]
    date_hierarchy = "date_sent"
    readonly_fields=["name",'contact_about', "email", "message", "date_sent","solution",'service']
    search_fields = ["name","email","message","date_sent"]
    list_filter = (SolutionOrServiceFilter,)

    def contact_about(self, obj):
        return obj.contact_about()
    contact_about.short_description = 'Contact About'

admin.site.register(Contact, ContactAdmin)

