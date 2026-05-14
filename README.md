# Analizador Léxico, Sintáctico e Intérprete (Tema 39568_24)

**Autor:** Gino Gabriel Tejada  
**Legajo:** 52141  
**Cátedra:** Sintaxis y Lenguajes de Programación - UTN FRM

---

## 1. Descripción del Proyecto
Implementación de un analizador completo para un lenguaje de programación específico definido mediante gramática EBNF. El proyecto utiliza **ANTLR4** para la generación del parser y lexer, y **Node.js** para la lógica de interpretación mediante el patrón de diseño **Visitor**.

## 2. Especificaciones Técnicas

El sistema ejecuta un pipeline de compilación que cubre las siguientes etapas:

**`Análisis Léxico:`** Identificación de tokens (ID, NUMERO, operadores, símbolos).

**`Análisis Sintáctico:`** Validación gramatical y construcción del árbol sintáctico.

**`Interpretación:`** Recorrido del árbol mediante un Visitor personalizado para ejecución y gestión de memoria.

## 3. Requerimientos Cumplidos
1.  **`Validación de entrada:`** Informe de estado del análisis sintáctico.
2.  **`Tabla de Tokens:`** Reporte de lexemas identificados.
3.  **`Representación del Árbol:`** Salida en formato texto de la jerarquía.
4.  **`Traducción y Ejecución:`** Mapeo a JavaScript y resolución de cálculos.

---

## 4. Instalación y Uso

### 1. Clonar el repositorio.

Abra una terminal en su equipo y ejecute el siguiente comando para obtener el código fuente:

    git clone https://github.com/Tejada435/52141.git
    
### 2. Acceder al directorio del proyecto.

Importante: El proyecto está en la subcarpeta. Estos comandos te meten en la carpeta y te abren el VS Code ahí mismo:

`cd 52141/Analizador-Calculadora`

`code .`

### 3. Instalar dependencias y ejecutar.

Una vez dentro de la carpeta (en la terminal de VS Code), ejecutá:

`npm install`

`npm start`

## 5. Casos de Prueba (Validación)

En la raíz del repositorio se adjuntan archivos `.txt` preparados para testear la robustez del sistema. Para probarlos, debe copiar el contenido del ejemplo deseado y pegarlo en el archivo `input.txt` que se encuentra dentro de la carpeta `Analizador-Calculadora`.

### Pruebas Correctas (Resultado Exitoso)

**`input_correcto_1.txt`**: Ejemplo base con asignaciones simples y multiplicación (Ancho * Alto).

**`input_correcto_2.txt`**: Ejemplo avanzado que incluye el uso de paréntesis y divisiones para el cálculo de áreas.

### Pruebas de Error (Validación de Robustez)

**`input_incorrecto_1.txt`**: Error sintáctico. Se omiten los delimitadores `;` al final de las sentencias para verificar que el parser detecte la falta de puntuación.

**`input_incorrecto_2.txt`**: Error Léxico y Sintáctico. Contiene un carácter no permitido (@). El sistema detectará el error léxico y, debido al proceso de recuperación de errores de ANTLR, informará también la inconsistencia sintáctica resultante en la estructura de la sentencia.

