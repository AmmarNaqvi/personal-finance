from django.core.management.base import BaseCommand, CommandError
import argparse
import xlrd
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Create users from a xlsx file.'

    def add_arguments(self, parser):
        parser.add_argument("-f", type=argparse.FileType(), required=True)

    def handle(self, *args, **options):
        workbook = xlrd.open_workbook(options['f'].name)
        sheet = workbook.sheet_by_index(0)
        objs = [
            User(
                username=sheet.cell_value(row, 0),
                email=sheet.cell_value(row, 1),
                password=sheet.cell_value(row, 2),
                first_name=sheet.cell_value(row, 3),
                last_name=sheet.cell_value(row, 4),
            )
            for row in xrange(sheet.nrows)
        ]
        users = User.objects.bulk_create(objs)
