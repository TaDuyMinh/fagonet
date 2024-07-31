from django.contrib import admin
from .models import Solution, SolutionDetail, SolutionGallery


@admin.action(description="Activate selected solution(s)")
def activate_solutions(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description="Deactivate selected solution(s)")
def deactivate_solutions(modeladmin, request, queryset):
    queryset.update(is_active=False)


class SolutionDetailInline(admin.TabularInline):
    model = SolutionDetail
    extra= 0

class SolutionGalleryInline(admin.StackedInline):
    model = SolutionGallery
    extra = 0
    verbose_name_plural= 'Gallery Images'

class SolutionAdmin(admin.ModelAdmin):
    inlines = [SolutionDetailInline,SolutionGalleryInline]
    list_display = ('id','title','intro', 'created_by', 'created_date', 'updated_by', 'updated_date', 'is_active')
    list_filter = ('is_active','created_by','updated_by')
    search_fields = ('title','id')
    actions = [activate_solutions, deactivate_solutions]

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

admin.site.register(Solution, SolutionAdmin)

