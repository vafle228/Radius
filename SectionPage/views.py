from django.shortcuts import render, redirect
from django.http import JsonResponse
from MainPage.models import Section, SectionConsume
from datetime import timedelta
from django.utils import timezone


def section_page(request, identifier):
    if Section.objects.filter(identifier=identifier).exists():
        section = Section.objects.filter(identifier=identifier)[0]
        return render(request, 'SectionPage/index.html', {'identifier': identifier})
    return redirect('/main/')


def update_data(request, identifier):
    if request.method == 'POST':
        if Section.objects.filter(identifier=identifier).exists():
            section, data, labels = Section.objects.filter(identifier=identifier)[0], [], []

            for i in range(1, 8):
                date, consumption = timezone.now().date() - timedelta(days=i), 0
                for consumer in SectionConsume.objects.filter(date=date, section=section):
                    consumption += consumer.consumption
                data.append(round(consumption / 24, 4))
                labels.append(str(date))
            consumption = SectionConsume.objects.filter(section=section)[0].consumption
            return JsonResponse({'data': data, 'labels': labels, 'consumption': consumption})
    return redirect('/main/')


def section_redirect(request):
    if request.method == "POST":
        return redirect(f'/sections/{request.POST["id"]}')
    return redirect('/main/')
