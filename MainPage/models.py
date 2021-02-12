from django.db import models
from datetime import datetime


class Section(models.Model):
    identifier = models.IntegerField()

    def __str__(self):
        return f'Сецкия #{self.identifier}'


class SectionConsume(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    consumption = models.IntegerField()
    date = models.DateField(default=datetime.now)

    def __str__(self):
        return f'Потребление секции #{self.section.identifier}'
