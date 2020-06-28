from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Note
from .serializers import NoteSerializer

@api_view(['GET', 'POST'])
def note_list(request):
    if request.method == 'GET':
        data = Note.objects.all()
        serializer = NoteSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        print(request.data)
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        print(serializer.errors)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def note_detail(request, pk):
    try:
        note = Note.objects.get(pk=pk)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = NoteSerializer(note, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


