
//declarción de constantes & variables(scope:globales)
const pantalla = document.getElementById('screen');
const memory = document.getElementById('memory');
let acumulador = 0;//recoge el resultado , y primer operando
let operando2 = 0;
let memoria = 0;
let operacion = "";
let BanderaVerde = true;
let decimal = false;
//-------
//declaracion de funciones
//----------
function tNum(tecla) {
    const pantalla = document.getElementById('screen');

    if (BanderaVerde ) {
        /* no tiene ninguna tecla y est VACIA*/

        pantalla.innerHTML = tecla;
    } else if(pantalla.innerHTML.includes("+") || pantalla.innerHTML.includes("-") || pantalla.innerHTML.includes("%")
    || pantalla.innerHTML.includes("/") || pantalla.innerHTML.includes("-")){
        pantalla.innerHTML = tecla;
        operando2 = parseFloat(pantalla.innerHTML);
    }else{
        /* tenemos q añadir tecla*/
        pantalla.innerHTML += tecla;
    }
    BanderaVerde = false;
        
    }



function tDec() {
    const pantalla = document.getElementById('screen');

    if (!decimal) {
        if (BanderaVerde) {
            /*si esta vacia la pantalla pone el 0.*/
            pantalla.innerHTML = '0.';

        }

        else {
            pantalla.innerHTML += '.';
        }
        BanderaVerde = false;
        decimal = true;

    }

}
//fin funcion operacion
function tOperacion(teclaOperacion) {
    const pantalla = document.getElementById('screen');

    switch (teclaOperacion) {
        case 'C':/* borra todo   */
            acumulador = 0;
            operando2 = 0;
            operacion = "";
            BanderaVerde = true;
            decimal = "false";
            pantalla.innerHTML = "0";
            break;
        case 'CE':/*borra el segundo operando--
        el acumulador es el primer operando, y el operando2 es el segundo operando*/
            if (operando2 != 0) {
                operando2 = 0;
                operacion = "";
                BanderaVerde = true;
                decimal = "false";
            }

            if (acumulador != 0) {
                pantalla.innerHTML = acumular.toString();
            }

            break;

        case 'M':
            memoria = parseFloat(pantalla.innerHTML);
            if (memoria != 0) {
                memory.style.backgroundcolor = 'orange';
                memory.style.color = 'black';

            }
            break;
        case 'RM':/*RECUPERACION DE LA MEMORIA* PASAR A DISPLAY LO Q ESTE EN MEMORIA*/
            if (memoria != 0) {
                pantalla.innerHTML = memoria.toString();

            }


            break;
        case 'CM':/*RECUPERACION DE LA MEMORIA* PASAR A DISPLAY LO Q ESTE EN MEMORIA*/
            if (memoria != 0) {
                pantalla.innerHTML = memoria.toString();

            }


            break;

        case '+-':/*limpiamos la memoria */
            /* cogemos el valro numerico d elo q hay en pantalla*/
            let valorNumerico = parseFloat(pantalla.innerHTML)//devuelve el valor contrario y depsues lo paso a la pantalla
            if (valorNumerico != 0) {
                valorNumerico *= -1;
                pantalla.innerHTML = valorNumerico.toString();
                /* si no tiene signo q le ponga y si tiene q se lo quite.
                       */

            }
        case 'RQ':/* OPERA CON LO Q TENGA GUARDADO EL ACUMULADOR*/
            acumulador.innerHTML = parseFloat(pantalla.innerHTML)
            if (acumulador >= 0) {
                acumulador = Math.sqrt(acumulador);

                pantalla.innerHTML = acumulador.toString();
            } else {
                alert("ATENCION:no se puede hallar la raiz d un numer negativo");
            }
            break;
        case '+':
            acumulador = parseFloat(pantalla.innerHTML);
            operacion = "+"
            pantalla.innerHTML = operacion;
            break;
        case '-':
            acumulador = parseFloat(pantalla.innerHTML);
            operacion = "-"
            pantalla.innerHTML = operacion;
            break;
        case 'x':
            acumulador = parseFloat(pantalla.innerHTML);
            operacion = "x"
            pantalla.innerHTML = operacion;
            break;
        case '/':
            acumulador = parseFloat(pantalla.innerHTML);
            operacion = "/"
            pantalla.innerHTML = operacion;
            break;
        case '=':
            calculo();

    }

    function calculo (){
        switch (operacion){
            case "+":
                pantalla.innerHTML = acumulador+operando2;
                break;
        }
    }


}

