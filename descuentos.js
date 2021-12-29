


function calcularPrecioConDescuento(precio, descuento) {

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];



function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    //SWITCH
  
    /*let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }*/


    //IF 

    if (!coupons.includes(couponValue)) {
        alert("El cupon " + couponValue + " no es valido");
    } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
    } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
    } else if (couponValue === "es_un_secreto") {
        descuento = 25;
    }

    
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;


    const resultD = document.getElementById("ResultD");
    resultD.innerText = "Usted obtuvo un descuento de: $" + (priceValue - precioConDescuento);
  }
