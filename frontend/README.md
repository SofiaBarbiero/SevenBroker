# Grupo-7-PIL23

Documento de nomenclatura para Frontend

## Commits

-   **Comentario del commit**: Iniciales, guion y mensaje

    ```txt
    UR - Agrego variables de entorno
    ```

## Formato de nombres

-   **Constantes permantentes**: UPPERCASE con snake_case

    ```javascript
    const CURRENT_YEAR = 2023;
    ```

-   **Constantes temporales o de un solo uso**: camelCase

    ```javascript
    const currentYear = 2023;
    ```

-   **Funciones**: camelCase

    ```javascript
    function currentYear() {
        return 2023;
    }
    ```

-   **Archivos**: kebab-case

    ```
    // Estructura de ejemplo (Proyecto de angular simplificado)

    └── src/
        ├── app/
        |    └── custom-button/
        |        ├── app.component.ts
        |        ├── app.component.css
        |        ├── app.component.html
        |        ├── shared/
        |        |      └── header/
        |        |               ├── header.component.ts
        |        |               ├── header.component.css
        |        |               └── header.component.html
        |        └── main-dashboard/
        |                   ├── main-dashboard.component.ts
        |                   ├── main-dashboard.component.css
        |                   └── main-dashboard.component.html
        |
        |
        └── assets/
             ├── fondo.png
             ├── icono.svg
             └── logo-portada/
                    └── logo.svg
    ```

-   **Componentes**: PascalCase

    > Componentes de Angular

    ```typescript
    export class TestComponent {
        constructor() {}
    }
    ```

-   **Clases**: PascalCase

    ```javascript
    class CurrentYear {
        constructor(year) {
            this.year = 2023;
        }
    }
    ```
