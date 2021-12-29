// Codigo del cuadrado 
console.group('Cuadrado')



function perimetroCuadrado(lado)  {
    return lado * 4;

} 




function areaCuadrado(lado) {
    return lado * lado;
}



console.groupEnd();

// Codigo del triangulo 





function perimetroTriangulo(lado1, lado2, base) {
    return lado1.parseInt() + Number(lado2) + Number(base);

}


function areaTriangulo(base, altura ) {
    return (base * altura) / 2;

}



console.groupEnd()


// Codigo del circulo 

console.group('Circulo')

// Radio 

function diametroCirculo(radio) {
    return radio * 2;
}





// PI

const PI = Math.PI;
console.log('PI es ' + PI + 'cm')



// Circunferiencia 

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}


// Area 

function areaCirculo(radio) {
    return (radio * radio ) * PI;
} 



console.groupEnd()


// Aqui interactuamos con el HTML


//CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputBase");
    const value3 = input3.value;


    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT)
}


function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputBase");
    const value3 = input3.value;
    const input4 = document.getElementById("InputAltura");
    const value4 = input4.value;


    const areaT = areaTriangulo(value3, value4)
    alert(areaT);
}

// Circulo 

function calcularDiametroCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const valueC = inputC.value;

    const diametroC = diametroCirculo(valueC);
    alert(diametroC);
}

function calcularAreaCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const valueC = inputC.value;

    const areaC = areaCirculo(valueC);
    alert(areaC);
}

function calcularPerimetroCirculo() {
    const inputC = document.getElementById("InputCirculo");
    const valueC = inputC.value;

    const perimetroC = perimetroCirculo(valueC);
    alert(perimetroC);
}
