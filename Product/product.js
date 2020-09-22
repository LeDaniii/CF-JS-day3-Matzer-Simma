function product(array){
    multiplication = 1
    for (i = 0; i < array.length; i++){
        multiplication *= array[i];
    }   
    return multiplication;
}

liste=[6,10,4]
liste2=[8,7,6]

document.write(product(liste2));