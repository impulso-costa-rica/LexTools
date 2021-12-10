var input1 = 0;
var input2 = 0;
var input3 = 0;
var btnCalcular =$('#btn-calcular')[0];
var RNacional =0;
var ANacional =0;
var CAbogados =0;
var RPapel =0;
var Fiscal =0;
var Agrario =0;
var Educacion =0;
var Contadores =0;
var CRoja =0;
var Parques =0;
var Municipal =0;
var Traspaso =0;
var RLibros =0;
var Fauna =0;
var Placa =0;
var Honorarios =0;
var totalTimbres =0;
var descuentoTimbres =0;
var iva =0;
var total =0;
function ValorRNacional (input,cuantia){
    if (cuantia==0){return 0};
    if ( cuantia==1){
        let value = (Math.ceil(input/1000))*1;
        if(value<2000){return 2000} 
        else {return value;}
    };
    if (cuantia==2){
        let value = (Math.ceil(input/1000))*5;
        if(value<2000){return 2000} 
        else {return value;}
    };
    if(cuantia==3){return 2000};
    if(cuantia==4){return 46220};
    if(cuantia==5){return((Math.ceil(input/1000))*5)+2000};
    if(cuantia==6){return 300};
    if(cuantia==7){
        let value = (Math.ceil(input/1000))*5;
        if(value<2000){return 2000+46220} 
        else {return value+46220;}
    };
};
function ValorANacional (input, cuantia){
    let value = 0;
    if(input<100000){value = 10} else if(input>=100000){value = 20};
    if(cuantia==0){return 0};
    if(cuantia==1){return value}
    if(cuantia==2){return 20}
    if(cuantia==3){return 5}
    if(cuantia==4){return value+value}
};
function ValorCAbogados (input,input2,cuantia){
    function getCAValue (inputValue){
        if(inputValue<=250000){return 0};
        if(inputValue>250000){return 1100};
        if(inputValue>1000000){return 2200};
        if(inputValue>5000000){return 5500};
        if(inputValue>25000000){return 11000};
        if(inputValue>50000000){return 16500};
        if(inputValue>100000000){return 27500};
        if(inputValue>500000000){return 55000}; 
    };
    if(cuantia==0){return 0};
    if(cuantia==1){return getCAValue(input)};
    if(cuantia==2){return 275};
    if(cuantia==3){return (getCAValue(input)*2)};
    if(cuantia==4){return getCAValue(input)+getCAValue(input2)};
};
function ValorRPapel (input,pliegos,cuantia){
    function getRPapelValue (inputValue){       
        if(inputValue<=25000){return 12.5};
        if(inputValue>25000){return 25};
        if(inputValue>75000){return 31.25};
        if(inputValue>100000){return 62.5};
        if(inputValue>250000){return 125};
        if(inputValue>500000){return 156.25};
        if(inputValue>1000000){return 312.5};
        if(inputValue>1500000){return 625};
        if(inputValue==0){return 125};
        console.log(inputValue);
    };
    if (pliegos==0){pliegos=1};
    let valuePliegos = (pliegos-1)*12.5;
    if(cuantia==0){return 0};
    if(cuantia==1){return getRPapelValue(input)+valuePliegos};
    if(cuantia==2){return 125};
};
function ValorFiscal (input,cuantia){
    let value = 0; 
    if(input<=25000){value=12.5};
    if(input>25000){value=25};
    if(input>75000){value=31.25};
    if(input>100000){value=62.5};
    if(input>250000){value=125};
    if(input>500000){value=156.25};
    if(input>1000000){value=312.5};
    if(input>1500000){value=625};
    if(cuantia==0){return 0};
    if(cuantia==1){return (Math.ceil(input/1000))*5};
    if(cuantia==2){return value};
    if(cuantia==3){return 125};
    if(cuantia==4){return 62.5};
};
function ValorAgrario (input,cuantia){
    let value = Math.ceil(input/1000)
    if (cuantia==0){return 0};
    if (cuantia==1){return value*3};
    if (cuantia==2){return value*1.5};
    if (cuantia==3){return value};
    if (cuantia==4){return value*1.25};
    if (cuantia==5){return 10000};
    if (cuantia==6){return 11175};
    if (cuantia==7){
        if (input-5000000<=0){return 2235}
        else{return 2235 + value*1.4};
    };
    if (cuantia==8){return value*3*2};
};
function ValorEducacion (input, cuantia){
    let value = 0; 
    if (input<=500000){value=5000};
    if (input>500000){value=6000};
    if (input>2000000){value=12000};
    if (input>4000000){value=18000};
    if (cuantia==0){return 0};
    if (cuantia==1){return 5000};
    if (cuantia==2){return value};
};
function ValorContadores (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 75}
};
function ValorCRoja (input, cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 500}
    if (cuantia==2){return 1000}
};
function ValorParques (input, cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 500}
    if (cuantia==2){return 1000}
};
function ValorMunicipal (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return (Math.ceil(input/1000))*2};
};
function ValorRLibros (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 15910}
};
function ValorFauna (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return (462200*0.25)/100};
};
function ValorPlaca (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 17600}
};
function ValorTraspaso (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return (input*2.5)/100};
    if (cuantia==2){return (input*1.5)/100};
};
function ValorHonorarios (input1, input2, input3, cuantia, porcentaje) {
    function calculo1 (input){
        let total = 0;
        if(input <= 11000000){total = input*2/100};
        if(input > 11000000 && input <= 16500000){total=220000+(input-11000000)*1.5/100}
        if(input >16500000 && input <= 33000000){total=220000+82500+(input-16500000)*1.25/100}
        if(input>33000000){total=220000+82500+206250+(input-33000000)*1/100};
        if (total<60500){total=60500};
        return total;
    };
    function calculo2 (input){
        let total = 0;
        if (input <= 16500000){total = input*20/100};
        if (input > 16500000 && input <= 82500000){total=3300000+(input-16500000)*15/100}
        if (input>82500000){total=3300000+9900000+(input-82500000)*10/100};
        if (total<60500){total=60500};
        return total;
    };
    if (cuantia==0){return 0};
    if (cuantia==1){return calculo1(input1)*porcentaje/100};
    if (cuantia==2){return calculo2(input1)*porcentaje/100};
    if (cuantia==3){return 60500*porcentaje/100};
    if (cuantia==4){return 121000*porcentaje/100};
    if (cuantia==5){return 383000*porcentaje/100};
    if (cuantia==6){return 18150*porcentaje/100};
    if (cuantia==7){return calculo1(input1)+90750};
    if (cuantia==8){return calculo1(input1)+calculo1(input2)*25/100};
    if (cuantia==9){
        let value1 = calculo1(input1*150/100);
        let value2 = (input1+input3)*90750+121000;
        if (value1>value2){return value1}
        else if (value1<value2){return value2};
    };
};  