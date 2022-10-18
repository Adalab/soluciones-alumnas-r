# Resolucion de este maldito ejercicio xD

### Para hacer este grid lo primero que he hecho es:

1. Crear una clase container MAIN con clase CONTAINER a la que le he aplicado:

- Un width y height porcentual para que sea responsive y para marcar los limites del contenedor
- Display flex + Direccion de la fila (tipo row) + flex-wrap-reverse (porque queremos que las imagenes vayan cayendo en fila ocupando todo el espacio y porque queremos que el espacio vacío quede arriba y no abajo).

2. Creo secciones con clase SECTION a la que aplico:

- El estilo correspondiente para que quede como en la foto del ejemplo. Importante establecer un width y un height siempre para las secciones.
- Establezco width y height para la imagen para que quede bien

3. Creo IDs para cada articulo (tambien se puede hacer con clases) y les aplico orden y flex-grow. Importante:

- Para que el artículo que yo ponga en orden 1 pase a destacado debo ponerle orden a todos los elementos.
- Todos los elementos tendrán flex-grow para que cuando suban a destacado ocupen el espacio sobrante.
