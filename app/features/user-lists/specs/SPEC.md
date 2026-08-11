# User lists feature

## Intent
Permitir que un usuario agregue nombres a una lista, revise los usuarios agregados y elimine entradas individuales.

## In scope
- Título visible del feature.
- Label acompañado de un input para ingresar un nombre de usuario.
- Botón para agregar el nombre a la lista.
- Listado de los usuarios agregados.
- Eliminación de cada usuario desde la lista.

## Out of scope
- Persistencia en servidor o almacenamiento local.
- Validaciones de formato más allá de nombre vacío.

## Requirements
- El feature debe vivir en `app/components/user-lists`.
- La lógica de UI debe residir en `hooks/useUserListsViewModel.ts`.
- El componente principal debe ser presentación únicamente.
- Textos y etiquetas deben definirse en `constants/UserLists.constants.ts`.

## Edge cases & errors
- Si el campo está vacío, mostrar un mensaje de validación.
- El usuario debe poder agregar con Enter o el botón.
- El componente debe eliminar correctamente el usuario seleccionado.

## Acceptance criteria
- [ ] `app/components/user-lists` contiene el feature completo.
- [ ] La página principal importa `@/app/components/user-lists/UserLists`.
- [ ] El input muestra un label junto al campo y un botón de agregar.
- [ ] La lista de usuarios se renderiza con botón `Eliminar` para cada elemento.
- [ ] No hay lógica de estado dentro del `.tsx` principal.
