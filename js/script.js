var orden = new Object();
ordenar.combo = function(){
    var combo = document.getElementById('combos');
    var texto = combo.options[combo.selectedIndex].value;
    switch(texto){
        case "super":
            combo = 7.25;
            return combo;
        case "personal":
             combo = 5.75;
             return combo;
        case "infantil":
            combo = 3.50;
            return combo;
        default:
            combo = 0;
            return combo; 
    }
}

function iniciar(){
    var ordenar = document.getElementById("ordenar");
    var combo = document.getElementById('combos');
    var texto = combo.options[combo.selectedIndex].value;

    var ens = document.getElementById("Ensalada");

    if(ordenar.addEventListener){
        ordenar.addEventListener("click",mostrar);
    }else{
        if(ordenar.attachEvent){
            ordenar.attachEvent("onclick",mostrar);
        }
    }

    if(combo.addEventListener){
        combo.addEventListener("selectionchange", definirCombo(texto));
    }else{
        if(combo.attachEvent){
            combo.attachEvent("onSelectionChange", definirCombo(texto));
        }
    }

   if(ens.checked == true){
    ensalada();
   }

}

function ensalada(){

    let cant = document.getElementById("ensaladaCant");
    cant.disabled = false;
    lettotalEns = cant.value * 1.50;

    return totalEns;
}

function papas(){
    let cant = document.getElementById("papasCant");
    cant.disabled = false;
    let totalPa = cant.value * 1.25;

    return totalPa;
}

function definirCombo(text){
    var combo;
    switch(text){
        case "super":
           alert(text)
            combo = 7.25;
            alert(combo);
            return combo;
        case "personal":
             combo = 5.75;
             return combo;
        case "infantil":
            combo = 3.50;
            return combo;
        default:
            combo = 0;
            return combo; 
    }
}

function calcularTotal(combo,ensalada,papas,bebida,piezas,cafe,postre){

}

function mostrar(){
    alert(definirCombo());
}

if(window.addEventListener){
    window.addEventListener("load",iniciar);
}else{
    if(window.attachEvent){
        window.attachEvent("onload",iniciar);
    }
}

//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
    str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0,pt) + "." + str.slice(pt);
    }
    function getVal(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i=0, len=radios.length; i<len; i++) {
    if (radios[i].checked == true) {
    val = radios[i].value;
    break;
    }
    }
    return val;
    }
    
    //Monto Total
    function getTotal(e) {
    var form = this.form;
    var val = parseFloat(form.elements['tops_tot'].value);
    if ( this.checked == true ) {
    val += parseFloat(this.value);
    } else {
    val -= parseFloat(this.value);
    }
    form.elements['tops_tot'].value = formatDecimal(val);
    updatePizzaTotal(form);
    }
    
    //Obtiene el subtotal del valor de acuerdo al tamaño
    
    function getSizePrice(e) {
    this.form.elements['sz_tot'].value = parseFloat(this.value);
    updatePizzaTotal(this.form);
    }
    
    //Calcula el precio total a cancelar por la pizza tomando en cuenta
    //los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
    
    function updateTotal(form) {
    var sz_tot = parseFloat(form.elements['sz_tot'].value);
    var tops_tot = parseFloat(form.elements['tops_tot'].value);
    form.elements['total'].value = formatDecimal(sz_tot + tops_tot);
    }
    (function() {
    var form = document.getElementById('pizzaForm');
    var el = document.getElementById('pizza_toppings');
    
    // Determinar los ingredientes seleccionados en las casillas de verificación
    
    var tops = el.getElementsByTagName('input');
    for (var i=0, len=tops.length; i<len; i++) {
    if (tops[i].type === 'checkbox') {
    tops[i].onclick = getToppingsTotal;
    }
    }
    var sz = form.elements['size'];
    for (var i=0, len=sz.length; i<len; i++) {
    sz[i].onclick = getSizePrice;
    }
    
    // set sz_tot to value of selected
    
    form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
    updatePizzaTotal(form);
    })();