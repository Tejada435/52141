grammar Calculator;

// --- REGLAS SINTACTICAS ---

programa : instruccion+ ;

instruccion 
    : asignacion 
    | imprimir 
    ;

asignacion : ID IGUAL expresion PUNTO_COMA # Asignar ;

imprimir : PRINT PAR_ABRE expresion PAR_CIERRA PUNTO_COMA # Impresion ;

// Segun EBNF: termino seguido de op y termino repetido
expresion : termino ( (MULT | DIV | SUMA | RESTA) termino)* # Operacion ;

termino 
    : NUMERO            # Numero
    | ID                # Id
    | PAR_ABRE expresion PAR_CIERRA # Parens
    ;

// --- REGLAS LEXICAS ---

// Definimos los tokens
PRINT : 'print' ;
IGUAL : '=' ;
PUNTO_COMA : ';' ;
PAR_ABRE : '(' ;
PAR_CIERRA : ')' ;
MULT : '*' ;
DIV : '/' ;
SUMA : '+' ;
RESTA : '-' ;

ID : [a-zA-Z]+ ;
NUMERO : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;