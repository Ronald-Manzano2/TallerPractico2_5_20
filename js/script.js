window.addEventListener("load",iniciarvariable);

function iniciarvariable(){
    //iniciar las variables de la seccion de combos
    var combo = document.getElementById("combos");
    var NumCombo = document.getElementById("cantCombo");

    //iniciar las variables de la seccion de otros menus
    //Ensaladas
    var ensalada = document.getElementById('salad');
    var cantSalad = document.getElementById('cantSalad');
    //Papas
    var papas = document.getElementById('papa');
    var cantPapas = document.getElementById('cantPapas');
    //Piezas de pollo
    var PiezasPollo = document.getElementById('pieza');
    var tamaños = document.getElementById('tamañoPollo');
    var cantPollo = document.getElementById('cantPiezas');
    //Bebidas
    var Bebidas = document.getElementById('soda');
    var tamañosSoda = document.getElementById('tamañoSoda');
    var cantSoda = document.getElementById('cantSoda');
    //Café
    var cafe = document.getElementById('cofee');
    var cantcafe = document.getElementById('cantCafe');
    //Postres
    var postre = document.getElementById('postre');
    var cantpostre = document.getElementById('cantPostre');
    //Variable de escritura
    var imprimir = document.getElementById('total');

    //Eventos para desbloquear las otras opciones (cantidad y tamaños)
    //Ensaladas
    if(ensalada.addEventListener){
        ensalada.addEventListener("change",function(){
            cantSalad.disabled = false;
        })
    }else{
        if(ensalada.attachtEvent){
            ensalada.attachtEvent("onchange",function(){
            cantSalad.disabled = false;
        })
        }
    }

    //Papas fritas
    if(papas.addEventListener){
        papas.addEventListener("change",function(){
            cantPapas.disabled = false;
        })
    }else{
        if(papas.attachtEvent){
            papas.attachtEvent("onchange",function(){
            cantPapas.disabled = false;
        })
        }
    }
    //Piezas de pollo
    if(PiezasPollo.addEventListener){
        PiezasPollo.addEventListener("change",function(){
            cantPiezas.disabled = false;
            tamaños.disabled = false;
        })
    }else{
        if(PiezasPollo.attachtEvent){
            cantPiezas.attachtEvent("onchange",function(){
            cantPiezas.disabled = false;
            tamaños.disabled = false;
        })
        }
    }

    //Bebidas
    if(Bebidas.addEventListener){
        Bebidas.addEventListener("change",function(){
            cantSoda.disabled = false;
            tamañosSoda.disabled = false;
        })
    }else{
        if(Bebidas.attachtEvent){
            Bebidas.attachtEvent("onchange",function(){
            cantSoda.disabled = false;
            tamañosSoda.disabled = false;
        })
        }
    }

    //Café
    if(cafe.addEventListener){
        cafe.addEventListener("change",function(){
            cantcafe.disabled = false;
        })
    }else{
        if(cafe.attachtEvent){
            cafe.attachtEvent("onchange",function(){
            cantcafe.disabled = false;
        })
        }
    }

    //Postres
    if(postre.addEventListener){
        postre.addEventListener("change",function(){
            cantpostre.disabled = false;
        })
    }else{
        if(postre.attachtEvent){
            postre.attachtEvent("onchange",function(){
            cantpostre.disabled = false;
        })
        }
    }

    //Funciones para calcular cada total
    //Combos
    combos(combo.selectedIndex,parseInt(NumCombo.value));

    //Ensalada
    salada(cantSalad.value);

    //Papas fritas
    fritas(cantPapas.value);

    //Envío de datos al objeto
    var ticket = new Orden();
    var subtotal = ticket.total(combos,salada,fritas);
    imprimir.value = subtotal.toLocaleString();
}

//Funcion del combo
function combos(combo,cantCombo){
    var total = 0;
    if(combo == 0){
        total = cantCombo*7.25;
        return total;
    }else{
        if(combo == 1){
            total = cantCombo*5.75;
            return total;
        }else{
            if(combo == 2){
                total= cantCombo*3.5;
                return total;
            }
        }
    }
}

//Función de la ensalada
function salada(cantidad){
    var total = 0;
    total = cantidad*1.5;
    return total;
}

//Funcion de las papas fritas
 function fritas(cantidad){
    var total = 0;
    total = cantidad*1.25;
    return total;
}


function Orden(combo,ensalada,papas){
    this.combo = combo;
    this.ensalada = ensalada;
    this.papas = papas;
    this.totale = combo+ensalada+papas;

    this.total = function(num1,num2,num3){
        var total = 0;
        total = num1+num2+num3;

        return total;
    }
}
