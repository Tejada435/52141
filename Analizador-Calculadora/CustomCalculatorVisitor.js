import CalculatorVisitor from "./generated/CalculatorVisitor.js";
import CalculatorParser from "./generated/CalculatorParser.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        // Mapa para almacenar las variables (ancho, alto, etc.)
        this.memory = new Map();
    }

    // Inicia el recorrido por todas las instrucciones del programa
    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    // Maneja la regla: ID '=' expresion ';'
    visitAsignar(ctx) {
        const id = ctx.ID().getText();
        const valor = this.visit(ctx.expresion());
        this.memory.set(id, valor);
        return valor;
    }

    // Maneja la regla: 'print' '(' expresion ')' ';'
    visitImpresion(ctx) {
        const valor = this.visit(ctx.expresion());
        console.log(`> RESULTADO: ${valor}`);
        return valor;
    }

    visitOperacion(ctx) {
        // Obtenemos el primer término
        let resultado = this.visit(ctx.termino(0));

        // Recorremos los demás términos y aplicamos el operador que corresponda
        for (let i = 1; i < ctx.termino().length; i++) {
            const operador = ctx.getChild(2 * i - 1).getText();
            const siguienteTermino = this.visit(ctx.termino(i));

            if (operador === '*') resultado *= siguienteTermino;
            else if (operador === '/') resultado /= siguienteTermino;
            else if (operador === '+') resultado += siguienteTermino;
            else if (operador === '-') resultado -= siguienteTermino;
        }
        return resultado;
    }

    // Convierte el texto de un NUMERO a valor numérico
    visitNumero(ctx) {
        return parseFloat(ctx.NUMERO().getText());
    }

    // Recupera el valor de un ID de la memoria
    visitId(ctx) {
        const id = ctx.ID().getText();
        return this.memory.get(id) || 0;
    }

    // Resuelve lo que hay dentro de los paréntesis
    visitParens(ctx) {
        return this.visit(ctx.expresion());
    }
}