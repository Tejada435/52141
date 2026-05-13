# Analizador Léxico, Sintáctico e Intérprete (Tema 39568_24)
Autor: Gino Gabriel Tejada
Legajo: 52141

1. Descripción del Proyecto
Implementación de un analizador completo para un lenguaje de programación específico definido mediante gramática EBNF. El proyecto utiliza ANTLR4 para la generación del parser y lexer, y Node.js para la lógica de interpretación mediante el patrón de diseño Visitor.

2. Especificaciones Técnicas
El sistema ejecuta un pipeline de compilación que cubre las siguientes etapas:
Análisis Léxico: Identificación de tokens (ID, NUMERO, operadores, palabras reservadas).
Análisis Sintáctico: Validación de la estructura gramatical y construcción del Concrete Syntax Tree (CST).
Análisis Semántico e Interpretación: Recorrido del árbol mediante un Visitor personalizado para la ejecución de instrucciones y gestión de memoria de variables.

3. Requerimientos Cumplidos
Según lo establecido en la consigna del Tema 39568_24:
Validación de entrada: Informe de estado del análisis sintáctico.
Tabla de Símbolos/Tokens: Generación de reporte de lexemas identificados.
Representación del Árbol: Salida en formato texto de la jerarquía de derivación.
Traducción y Ejecución: Mapeo de instrucciones a sintaxis de JavaScript y ejecución de cálculos aritméticos.

4. Instalación y Uso
Para desplegar el entorno de ejecución:
# 1. Clonar repositorio
git clone https://github.com/Tejada435/52141.git
# 2. Instalar dependencias de desarrollo
npm install
# 3. Ejecutar pipeline completo
npm start
5. Casos de Prueba
En la carpeta /ejemplos se encuentran los archivos para testear la robustez del analizador:
input_correcto_1.txt 
input_correcto_2.txt: Programas válidos con asignaciones y expresiones complejas.
input_incorrecto_1.txt: Error sintáctico (omisión de delimitadores).
input_incorrecto_2.txt: Error léxico (presencia de caracteres fuera del alfabeto definido).
