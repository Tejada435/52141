grammar Calculator;

// --- REGLAS SINTACTICAS 

programa : instruccion+ ;

instruccion 
    : asignacion 
    | imprimir 
    ;

asignacion : ID '=' expresion ';' # Asignar ;

imprimir : 'print' '(' expresion ')' ';' # Impresion ;

// El EBNF dice: termino seguido de op y termino repetido
expresion : termino (op=('*'|'/'|'+'|'-') termino)* # Operacion ;

termino 
    : NUMERO            # Numero
    | ID                # Id
    | '(' expresion ')' # Parens
    ;

// --- REGLAS LEXICAS ---

ID : [a-zA-Z]+ ;
NUMERO : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;