from django.shortcuts import render, redirect
from .models import SectionConsume, Section
from django.http import JsonResponse


def main_page(request):
    return render(request, 'MainPage/index.html')


def create_section(request):
    if request.method == 'POST':
        identifier = request.POST['id']
        if not Section.objects.filter(identifier=identifier).exists():
            Section.objects.create(identifier=identifier).save()
            return redirect('/main/')
    return redirect('/main/')


def update_average(request):
    if request.method == 'POST':
        data, labels, electricity = [], [], 0
        for section in Section.objects.all():
            consumption = 0
            electricity += SectionConsume.objects.filter(section=section)[0].consumption
            for consumer in SectionConsume.objects.filter(section=section):
                consumption += consumer.consumption
            data.append(round(consumption / 24, 3))
            labels.append(section.identifier)
        electricity /= len(Section.objects.all())
        return JsonResponse({'data': data, 'labels': labels, 'consumption': round(electricity, 2)})
    return redirect('/main/')

