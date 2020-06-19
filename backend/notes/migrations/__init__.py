from django.db import migrations

def create_data(apps, schema_editor):
    Note = apps.getModel('notes', 'Note')
    Note(name="me", text="the quick brown fox jumped over the lazy dog")

class Migration(migrations.Migration):

    dependencies = [
         ('notes', '0001_initial')
    ]

    operations = [
        migrations.RunPython(create_data),
     ]
