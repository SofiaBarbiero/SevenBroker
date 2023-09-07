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
