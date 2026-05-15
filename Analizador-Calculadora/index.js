import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("Error: No se encontró 'input.txt'");
        return;
    }

    const chars = CharStreams.fromString(input);
    const lexer = new CalculatorLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokens);

    // Punto 1: Análisis Sintáctico
    const tree = parser.programa();{
        // PUNTO 1: INFORMAR SI ES CORRECTA
    if (parser.syntaxErrorsCount === 0) {
        console.log("\n>>> ANÁLISIS SINTÁCTICO: Entrada correcta (Sin errores).");
    } else {
        console.log("\n>>> ANÁLISIS SINTÁCTICO: Se detectaron errores.");
        // ANTLR ya imprime los errores por defecto 
        return; 
    }
    }

    // --- PUNTO 2: TABLA DE LEXEMAS Y TOKENS ---
    console.log("\n===========================================");
    console.log("      TABLA DE LEXEMAS Y TOKENS");
    console.log("===========================================");
    console.log("Lexema\t\t\tToken");
    console.log("-------------------------------------------");
    tokens.fill();
    tokens.tokens.forEach(t => {
        if (t.type !== -1) {
            const nombreToken = lexer.constructor.symbolicNames[t.type] || lexer.constructor.ruleNames[t.type - 1];
            if (nombreToken !== 'WS') {
                console.log(`${t.text.trim().padEnd(15)}\t\t${nombreToken}`);
            }
        }
    });

    // --- PUNTO 3: ÁRBOL DE ANÁLISIS SINTÁCTICO ---
    console.log("\n===========================================");
    console.log("      ÁRBOL SINTÁCTICO (TEXTO)");
    console.log("===========================================");
    // toStringTree muestra la estructura jerárquica
    console.log(tree.toStringTree(parser.ruleNames));

    // --- PUNTO 4: INTERPRETACIÓN Y SALIDA JS ---
    console.log("\n===========================================");
    console.log("      INTERPRETACIÓN");
    console.log("===========================================");
    
    if (parser.syntaxErrorsCount > 0) {
        console.error(">>> RESULTADO: Error en la entrada.");
    } else {
        // Mostramos el código "como si fuera JS" (Punto 4)
        console.log("Código fuente equivalente en JavaScript:");
        console.log("-------------------------------------------");
        console.log(input.replace(/print/g, "console.log")); 
        console.log("-------------------------------------------");

        console.log("Ejecutando intérprete...");
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);
    }
}

main();