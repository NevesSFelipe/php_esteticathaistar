function converter_data_us_to_br(dataUS) {

    const arrayDataUS = dataUS.split('-');
    
    return `${arrayDataUS[2]}/${arrayDataUS[1]}/${arrayDataUS[0]}`;

}

function converter_data_br_to_us(dataBR) {

    const arrayDataBR = dataBR.split("/");

    return `${arrayDataBR[2]}-${arrayDataBR[1]}-${arrayDataBR[0]}`;

}