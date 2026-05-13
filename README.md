# Analizador Léxico, Sintáctico e Intérprete (Tema 39568_24)

**Autor:** Gino Gabriel Tejada  
**Legajo:** 52141  
**Cátedra:** Sintaxis y Lenguajes de Programación - UTN FRM

---

## 1. Descripción del Proyecto
Implementación de un analizador completo para un lenguaje de programación específico definido mediante gramática EBNF. El proyecto utiliza **ANTLR4** para la generación del parser y lexer, y **Node.js** para la lógica de interpretación mediante el patrón de diseño **Visitor**.

## 2. Especificaciones Técnicas
El sistema ejecuta un pipeline de compilación que cubre las siguientes etapas:
* **Análisis Léxico:** Identificación de tokens (ID, NUMERO, operadores, símbolos).
* **Análisis Sintáctico:** Validación gramatical y construcción del árbol sintáctico.
* **Interpretación:** Recorrido del árbol mediante un Visitor personalizado para ejecución y gestión de memoria.

## 3. Requerimientos Cumplidos
1.  **Validación de entrada:** Informe de estado del análisis sintáctico.
2.  **Tabla de Tokens:** Reporte de lexemas identificados.
3.  **Representación del Árbol:** Salida en formato texto de la jerarquía.
4.  **Traducción y Ejecución:** Mapeo a JavaScript y resolución de cálculos.

---

## 4. Instalación y Uso

### 1. Clonar repositorio
git clone [https://github.com/Tejada435/52141.git](https://github.com/Tejada435/52141.git)
### 2. Instalar dependencias
npm install
### 3. Ejecutar pipeline completo
npm start
### 4. Casos de Prueba (Carpeta /ejemplos)
input_correcto_1.txt 

input_correcto_2.txt: Asignaciones y expresiones válidas.

input_incorrecto_1.txt: Error sintáctico (omisión de delimitadores).

input_incorrecto_2.txt: Error léxico (caracteres fuera del alfabeto).
